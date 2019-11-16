'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _FinappFactory = require('./build/FinappFactory.json');

var _FinappFactory2 = _interopRequireDefault(_FinappFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_FinappFactory2.default.interface, '0x1109A77035D054D619Ae72B36228D5451F391D81'));

instance.options.address = '0x1109A77035D054D619Ae72B36228D5451F391D81';
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJldGhGaW5hbmNlRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJvcHRpb25zIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQThCLEFBQTlCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsd0JBQWtCLEFBQTdCLFdBQXdDLEFBQXhDLEFBRGUsQUFBakI7O0FBSUEsU0FBUyxBQUFULFFBQWlCLEFBQWpCLFVBQTJCLEFBQTNCLEFBQ0E7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkQ6L3NhbmppdmZvbGRlci9wcm9qZWN0cy9ldGhGaW5hbmNlIn0=