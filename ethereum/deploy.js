const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/FinappFactory.json');
const provider = new HDWalletProvider(
  '--input your account phrase words--', 'https://rinkeby.infura.io/v3/d1d56533f438474f9642a893faec90c0'
);
const web3 = new Web3(provider);

const deploy = async () => {
const accounts = await web3.eth.getAccounts();
console.log('Attempting to deploy from account', accounts[0]);
const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({ data: compiledFactory.bytecode }).send({ gas: '5000000', from: accounts[0] });
console.log('Contract deployed to', result.options.address);
};
deploy();
