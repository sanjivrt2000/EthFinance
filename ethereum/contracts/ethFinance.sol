pragma solidity ^0.4.17;

contract FinappFactory{
    address public contractaddress = address(this);
    address[] public deployedFinAddr;
    address[] public finaddress;
    address[] public deployedPerAddr;

    struct deployedaddrstruct {
        address deployedaddress;
        bool isEntity;
        string instancetype;
    }

    struct loanpoolstruct{
        address financeaddress;
        address clientaddress;
        uint256 loanamount;
        string loanstatus;
        uint256 loanapplydate;
        uint256 loanapproveddate;
        uint256 loanclearancedate;
        string loandetails;
    }

    string public err;
    mapping (address => deployedaddrstruct) public deployedAddress;
    loanpoolstruct[] public loanpool;

   function createNewInstance(int p_inst_type) public {
      if(isEntity(msg.sender))
      {
        revert('A deployed instance already exists with requested account address!');
      }
      else {
        address newInstance = address(new Finapp(msg.sender, address(this)));
        if (p_inst_type == 1) {
        deployedFinAddr.push(newInstance);
        finaddress.push(msg.sender);
        deployedAddress[msg.sender].deployedaddress = newInstance;
        deployedAddress[msg.sender].isEntity = true;
        deployedAddress[msg.sender].instancetype = 'finance';
        }
     else if (p_inst_type == 2) {
        deployedPerAddr.push(newInstance);
        deployedAddress[msg.sender].deployedaddress = newInstance;
        deployedAddress[msg.sender].isEntity = true;
        deployedAddress[msg.sender].instancetype = 'client';
      }
      else {
          err = "Needs exceptional handling";
      }
      }
   }

   function isEntity(address entityAddress) public view returns(bool isIndeed) {
       return deployedAddress[entityAddress].isEntity;
    }

    function GetFinAddress() view public returns(address[] memory){
        return finaddress;
    }

    function fillLoanPool(address _finaddress, address _clientaddress, uint256 _loanamount, uint256 _loanapplydate) public  {
        loanpoolstruct memory newRequest = loanpoolstruct({
            financeaddress : _finaddress,
            clientaddress : _clientaddress,
            loanamount : _loanamount,
            loanstatus : 'Applied',
            loanapplydate : _loanapplydate,
            loanapproveddate : 0,
            loanclearancedate: 0,
            loandetails: ''
        });

        loanpool.push(newRequest);
    }

    function getRequestCount() public view returns (uint) {
        return loanpool.length;
    }

    function changeLoanStatus(uint256 _loanid, string memory _loanstatus ) public returns(bool success){
       loanpoolstruct storage request = loanpool[_loanid];
        request.loanstatus = _loanstatus;
        request.loanapproveddate = block.timestamp;
    }
}

contract Finapp {
    struct fininfoStruct{
        string fullname;
        string location;
        string doe;
        int256 regno;
        bool isEntity;
    }

     struct clientinfoStruct{
        string firstname;
        string lastname;
        string location;
        string dob;
        int256 regno;
        string fathername;
        bool isEntity;
    }

    address public factoryaddress;
    address public _entityaddress;
    address public accountmanager;
    mapping (address => fininfoStruct) public fininfoStructs;
    mapping (address => clientinfoStruct) public clientinfoStructs;
    address[] public registeredFinances;
    address[] public registeredClients;

    constructor(address _parameter, address _factoryaddress) public {
        accountmanager = _parameter;
        _entityaddress = _parameter;
        factoryaddress = _factoryaddress;
    }

    modifier restricted() {
       require(msg.sender == accountmanager);
       _;
    }

    function setFinDetails(string memory _fullname, string memory _location, string memory _doe, int256 _regno) public restricted() returns(bool success) {
    if(isFinEntity(msg.sender))
      {
        revert('You are already registered!');
      }
      else {
        fininfoStructs[_entityaddress].fullname = _fullname;
        fininfoStructs[_entityaddress].location = _location;
        fininfoStructs[_entityaddress].doe = _doe;
        fininfoStructs[_entityaddress].regno = _regno;
        fininfoStructs[_entityaddress].isEntity = true;
        registeredFinances.push(_entityaddress);
        return true;
      }
    }

    function setClientDetails(string memory _firstname,string memory _lastname, string memory _location, string memory _dob, int256 _regno, string memory _fathername) public restricted() returns(bool success) {
    if(isClientEntity(msg.sender))
      {
        revert('You are already registered!');
      }
      else {
        clientinfoStructs[_entityaddress].firstname = _firstname;
        clientinfoStructs[_entityaddress].lastname = _lastname;
        clientinfoStructs[_entityaddress].location = _location;
        clientinfoStructs[_entityaddress].dob = _dob;
        clientinfoStructs[_entityaddress].regno = _regno;
        clientinfoStructs[_entityaddress].fathername = _fathername;
        clientinfoStructs[_entityaddress].isEntity = true;
        registeredClients.push(_entityaddress);
        return true;
      }
    }

    function isFinEntity(address _entityAddress) public view returns(bool isIndeed) {
       return fininfoStructs[_entityAddress].isEntity;
    }

    function isClientEntity(address _entityAddress) public view returns(bool isIndeed) {
       return clientinfoStructs[_entityAddress].isEntity;
    }

   function loanRequest(address _finaddress, address _clientaddress, address _financedeployaddress, uint256 _loanamount, uint256 _loanapplydate) public  {
        FinappFactory forGlobalInstance = FinappFactory(factoryaddress);
        forGlobalInstance.fillLoanPool(_finaddress, _clientaddress, _loanamount, _loanapplydate);
    }
}
