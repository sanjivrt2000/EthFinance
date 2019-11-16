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

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../../../routes');

var _factory = require('../../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _ethFinance = require('../../../ethereum/ethFinance');

var _ethFinance2 = _interopRequireDefault(_ethFinance);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\sanjivfolder\\projects\\ethFinance\\pages\\customer\\pages\\show.js?entry';


var FinanceShowDetails = function (_Component) {
  (0, _inherits3.default)(FinanceShowDetails, _Component);

  function FinanceShowDetails() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FinanceShowDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FinanceShowDetails.__proto__ || (0, _getPrototypeOf2.default)(FinanceShowDetails)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loanamount: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$state, loanamount, errorMessage, accounts, datenow, clientaddress, customerinstance;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });

                //make request to apply loan
                _context.prev = 2;
                _this$state = _this.state, loanamount = _this$state.loanamount, errorMessage = _this$state.errorMessage;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                datenow = Date.now();
                //fillup for finloanRequest

                _context.next = 10;
                return _factory2.default.methods.deployedAddress(accounts[0]).call();

              case 10:
                clientaddress = _context.sent;
                customerinstance = (0, _ethFinance2.default)(clientaddress[0]);
                _context.next = 14;
                return customerinstance.methods.loanRequest(_this.props.fininstmgr, accounts[0], _this.props.instaddr, _this.state.loanamount, datenow).send({ from: accounts[0], gas: 5000000 });

              case 14:
                _this.setState({ loading: false });
                _routes.Router.pushRoute('/customer/' + clientaddress[0] + '/pages/loanpool');
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 18]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FinanceShowDetails, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var addr = void 0;
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Finance Information'), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Account Manager : ', this.props.fininstmgr), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Account Deployed Address : ', this.props.instaddr), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Finance Name : ', this.props.fininfo[0]), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Finance Address : ', this.props.fininfo[1]), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Finance DOE : ', this.props.fininfo[2]), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Finance RegNo : ', this.props.fininfo[3]), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Apply For Loan'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.loanamount,
        onChange: function onChange(event) {
          return _this3.setState({ loanamount: event.target.value });
        },
        label: 'Numeric', labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Alert!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Apply Now!')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var instaddr, financeinstance, fininstmgr, fininfo;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _factory2.default.methods.deployedAddress(props.query.address).call();

              case 2:
                instaddr = _context2.sent;
                financeinstance = (0, _ethFinance2.default)(instaddr[0]);
                _context2.next = 6;
                return financeinstance.methods.accountmanager().call();

              case 6:
                fininstmgr = _context2.sent;
                _context2.next = 9;
                return financeinstance.methods.fininfoStructs(fininstmgr).call({ from: fininstmgr });

              case 9:
                fininfo = _context2.sent;
                return _context2.abrupt('return', { instance: financeinstance, fininstmgr: fininstmgr, instaddr: instaddr[0], fininfo: fininfo });

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FinanceShowDetails;
}(_react.Component);

exports.default = FinanceShowDetails;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjdXN0b21lclxccGFnZXNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTGFiZWwiLCJNZXNzYWdlIiwiR3JpZCIsIkxheW91dCIsIkxpbmsiLCJmYWN0b3J5IiwiRXRoRmluYW5jZSIsIndlYjMiLCJSb3V0ZXIiLCJGaW5hbmNlU2hvd0RldGFpbHMiLCJzdGF0ZSIsImxvYW5hbW91bnQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZGF0ZW5vdyIsIkRhdGUiLCJub3ciLCJtZXRob2RzIiwiZGVwbG95ZWRBZGRyZXNzIiwiY2FsbCIsImNsaWVudGFkZHJlc3MiLCJjdXN0b21lcmluc3RhbmNlIiwibG9hblJlcXVlc3QiLCJwcm9wcyIsImZpbmluc3RtZ3IiLCJpbnN0YWRkciIsInNlbmQiLCJmcm9tIiwiZ2FzIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImFkZHIiLCJmaW5pbmZvIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsImFkZHJlc3MiLCJmaW5hbmNlaW5zdGFuY2UiLCJhY2NvdW50bWFuYWdlciIsImZpbmluZm9TdHJ1Y3RzIiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFPLEFBQU8sQUFBUzs7QUFDcEQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFVLEFBQ2pCLEFBQVMsQUFBYzs7Ozs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OztvT0FDSixBO2tCQUFRLEFB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eUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxZQUFZLE1BQUEsQUFBTSxPQUEzQyxBQUFTLEFBQWMsQUFBMkI7QUFGaEUsQUFHRztlQUhILEFBR1MsV0FBVSxlQUhuQixBQUdpQzs7b0JBSGpDO3NCQUZGLEFBQ0UsQUFDQSxBQVFBO0FBUkE7QUFDQSwyQkFPQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQVZGLEFBVUUsQUFFQTtBQUZBOzBCQUVBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBdkJWLEFBQ0UsQUFVTSxBQVlFLEFBS1g7Ozs7OzZHQTVENEIsQTs7Ozs7Ozt1QkFDSixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsZ0JBQWdCLE1BQUEsQUFBTSxNQUF0QyxBQUE0QyxTQUE1QyxBLEFBQXFEOzttQkFBdEU7QSxxQ0FDQTtBLGtDQUFrQiwwQkFBVyxTQUFYLEEsQUFBVyxBQUFTOzt1QkFDcEIsZ0JBQUEsQUFBZ0IsUUFBaEIsQUFBd0IsaUJBQXhCLEFBQXlDLEE7O21CQUE1RDtBOzt1QkFDYyxnQkFBQSxBQUFnQixRQUFoQixBQUF3QixlQUF4QixBQUF1QyxZQUF2QyxBQUFtRCxLQUFLLEVBQUUsTUFBMUQsQUFBd0QsQUFBUSxBOzttQkFBaEY7QTtrREFDRyxFQUFFLFVBQUYsQUFBWSxpQkFBaUIsWUFBN0IsQUFBeUMsWUFBWSxVQUFVLFNBQS9ELEFBQStELEFBQVMsSUFBSyxTQUE3RSxBLEFBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWi9ELEEsQUFzRWpDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovc2Fuaml2Zm9sZGVyL3Byb2plY3RzL2V0aEZpbmFuY2UifQ==