const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/FactoryFinance.json');
const compiledFinance = require('../ethereum/build/Finance.json');

let accounts;
let factory;
let financeaddress;
let customeraddress;
let instance;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory =  await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data : compiledFactory.bytecode }).send({ from: accounts[0], gas: '5000000' });
});

describe('FinanceTests', () => {

    it('deploys a factory', () => {
      console.log('==================');
      assert.ok(factory.options.address);
      console.log(factory.options.address);
    });

    it('finance can create new instances', async () => {
      console.log('==================');
      await factory.methods.CreateNewInstance(1).send({ from: accounts[1], gas: '5000000' });
      await factory.methods.CreateNewInstance(1).send({ from: accounts[2], gas: '5000000' });

      const financeaddress = await factory.methods.GetDeployedFinAddr().call({ from: accounts[0] });
      console.log(financeaddress);
      assert.ok(financeaddress[1]);

    });

    it('customers can create new instances', async () => {
      console.log('==================');
      await factory.methods.CreateNewInstance(2).send({ from: accounts[1], gas: '5000000' });
      await factory.methods.CreateNewInstance(2).send({ from: accounts[2], gas: '5000000' });

      const customeraddress = await factory.methods.GetDeployedPerAddr().call({ from: accounts[0] });
      console.log(customeraddress);
      assert.ok(customeraddress[0]);
      assert.ok(customeraddress[1]);

    });

    it('account manager is the end caller for finance owner', async () => {
      console.log('=================');
      await factory.methods.CreateNewInstance(1).send({ from: accounts[1], gas: '5000000' });
      const financeaddress = await factory.methods.GetDeployedFinAddr().call({ from: accounts[0] });
      //console.log(financeaddress[0]);
      instance = await new web3.eth.Contract(JSON.parse(compiledFinance.interface), financeaddress[0]);
      const financemgr = await instance.methods.accountManager().call({ from: accounts[1]});
      console.log(financemgr);
      console.log(accounts[1]);
      assert.equal(financemgr, accounts[1]);
    });

    it('account manager is the end caller for customer owner', async () => {
      console.log('=================');
      await factory.methods.CreateNewInstance(2).send({ from: accounts[2], gas: '5000000' });
      const financeaddress = await factory.methods.GetDeployedPerAddr().call({ from: accounts[0] });
      //console.log(financeaddress[0]);
      instance = await new web3.eth.Contract(JSON.parse(compiledFinance.interface), financeaddress[0]);
      const customermgr = await instance.methods.accountManager().call({ from: accounts[1]});
      console.log(customermgr);
      console.log(accounts[2]);
      assert.equal(customermgr, accounts[2]);
    });

    it('finance owner can register account', async () => {
      console.log('=================');
      await factory.methods.CreateNewInstance(1).send({ from: accounts[1], gas: '5000000' });
      const financeaddress = await factory.methods.GetDeployedFinAddr().call({ from: accounts[1] });
      instance = await new web3.eth.Contract(JSON.parse(compiledFinance.interface), financeaddress[0]);
      await instance.methods.FinReg('Finance1','Address1','2016-05-01','123456789').send({ from: accounts[1], gas: '5000000' });
      let fininfo = await instance.methods.GetFinInfo(0).call({ from: accounts[1] });
      console.log(fininfo);
    });

    it('customer owner can register account', async () => {
      console.log('=================');
      await factory.methods.CreateNewInstance(2).send({ from: accounts[2], gas: '5000000' });
      const customeraddress = await factory.methods.GetDeployedPerAddr().call({ from: accounts[2] });
      instance = await new web3.eth.Contract(JSON.parse(compiledFinance.interface), customeraddress[0]);
      await instance.methods.PerAccReg('Sanjiv','Ranjit','1995-02-26','123456789','Shyam Sundar Ranjit').send({ from: accounts[2], gas: '5000000' });
      let customerinfo = await instance.methods.GetPerAccInfo(0).call({ from: accounts[2] });
      console.log(customerinfo);
    });

    it('Customer can apply loan and finance can change loan status', async () => {
        console.log('=================');
        //finance account registration
        await factory.methods.CreateNewInstance(1).send({ from: accounts[1], gas: '5000000' });
        const financeaddress = await factory.methods.GetDeployedFinAddr().call({ from: accounts[1] });
        let fininstance = await new web3.eth.Contract(JSON.parse(compiledFinance.interface), financeaddress[0]);
        await fininstance.methods.FinReg('Finance1','Address1','2016-05-01','123456789').send({ from: accounts[1], gas: '5000000' });
        let fininfo = await fininstance.methods.GetFinInfo(0).call({ from: accounts[1] });
        let finmanager = fininfo[4];

        //customer account registration
        await factory.methods.CreateNewInstance(2).send({ from: accounts[2], gas: '5000000' });
        const customeraddress = await factory.methods.GetDeployedPerAddr().call({ from: accounts[2] });
        let cusinstance = await new web3.eth.Contract(JSON.parse(compiledFinance.interface), customeraddress[0]);
        await cusinstance.methods.PerAccReg('Sanjiv','Ranjit','1995-02-26','123456789','Shyam Sundar Ranjit').send({ from: accounts[2], gas: '5000000' });
        let customerinfo = await cusinstance.methods.GetPerAccInfo(0).call({ from: accounts[2] });

        //customer loan request
        await cusinstance.methods.ApplyLoan(finmanager,'1000000','0001').send({ from: accounts[2], gas: '5000000' });
        let loanhistoryinfo = await cusinstance.methods.loanHistoryInfo(0).call({ from: accounts[2] });
        console.log(loanhistoryinfo);

        //change status to watchlist
       await cusinstance.methods.ChangeLoanStatus('0','reviewing').send({ from: accounts[1], gas: '5000000' });
       let loanhistoryinfonew = await cusinstance.methods.loanHistoryInfo(0).call({ from: accounts[2] });
       assert.equal(loanhistoryinfonew.currentStatus, 'reviewing');
       console.log(loanhistoryinfonew.currentStatus);

    });

  });
