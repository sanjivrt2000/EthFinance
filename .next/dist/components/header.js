'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\sanjivfolder\\projects\\ethFinance\\components\\header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accdash, factorydash;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accdash = _context.sent;
                _context.next = 6;
                return _factory2.default.methods.deployedAddress(accdash[0]).call();

              case 6:
                factorydash = _context.sent;

                if (factorydash[2] == 'finance') {
                  _routes.Router.pushRoute('/finance/' + factorydash[0] + '/dashboard/');
                }

                if (factorydash[2] == 'client') {
                  _routes.Router.pushRoute('/Customer/' + factorydash[0] + '/dashboard/');
                }

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'EthFinance')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onClick, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, ' Goto Dashboard'), _react2.default.createElement(_routes.Link, { route: '/ethKosh/login', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'Login'))));
    }
  }]);

  return Header;
}(_react.Component);

;

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJCdXR0b24iLCJMaW5rIiwid2ViMyIsImZhY3RvcnkiLCJSb3V0ZXIiLCJIZWFkZXIiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjZGFzaCIsIm1ldGhvZHMiLCJkZXBsb3llZEFkZHJlc3MiLCJjYWxsIiwiZmFjdG9yeWRhc2giLCJwdXNoUm91dGUiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYSxBQUNwQixBQUFTLEFBQWM7Ozs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSjsyRkFBVSxpQkFBQSxBQUFPLE9BQVA7cUJBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1I7c0JBRFEsQUFDUixBQUFNO2dDQURFO3VCQUVZLGNBQUEsQUFBSyxJQUZqQixBQUVZLEFBQVM7O21CQUF6QjtBQUZJLG1DQUFBO2dDQUFBO3VCQUdrQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsZ0JBQWdCLFFBQWhDLEFBQWdDLEFBQVEsSUFIMUQsQUFHa0IsQUFBNEM7O21CQUFoRTtBQUhFLHVDQUlSOztvQkFBSSxZQUFBLEFBQVksTUFBaEIsQUFBc0IsV0FBVSxBQUM5QjtpQ0FBQSxBQUFPLHdCQUFzQixZQUE3QixBQUE2QixBQUFZLEtBQzFDO0FBRUQ7O29CQUFHLFlBQUEsQUFBWSxNQUFmLEFBQXFCLFVBQVMsQUFDNUI7aUNBQUEsQUFBTyx5QkFBdUIsWUFBOUIsQUFBOEIsQUFBWSxLQUMzQztBQVZPOzttQkFBQTttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7Ozs7Ozs7OzZCQWFGLEFBQ047NkJBQ0UsQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQWE7b0JBQTFCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFHRixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQWpCLEFBQXNCLFNBQVMsU0FBL0I7b0JBQUE7c0JBQUE7QUFBQTtTQURBLEFBQ0EsQUFDQSxvQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBVE4sQUFDRSxBQUtFLEFBRUEsQUFDRSxBQU1QOzs7OztBQTlCa0IsQTs7QUErQnBCLEFBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkQ6L3NhbmppdmZvbGRlci9wcm9qZWN0cy9ldGhGaW5hbmNlIn0=