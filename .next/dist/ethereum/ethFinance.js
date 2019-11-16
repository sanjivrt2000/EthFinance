'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Finapp = require('./build/Finapp.json');

var _Finapp2 = _interopRequireDefault(_Finapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Finapp2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxldGhGaW5hbmNlLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJFdGhGaW5hbmNlIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBdUIsQUFBdkIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzFCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ0wsS0FBSyxBQUFMLE1BQVcsaUJBQVcsQUFBdEIsQUFESyxZQUM2QixBQUQ3QixBQUFQLEFBRUQ7QUFIRCIsImZpbGUiOiJldGhGaW5hbmNlLmpzIiwic291cmNlUm9vdCI6IkQ6L3NhbmppdmZvbGRlci9wcm9qZWN0cy9ldGhGaW5hbmNlIn0=