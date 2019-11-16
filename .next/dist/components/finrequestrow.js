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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ethFinance = require('../ethereum/ethFinance');

var _ethFinance2 = _interopRequireDefault(_ethFinance);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\sanjivfolder\\projects\\ethFinance\\components\\finrequestrow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onView = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(event.currentTarget.value);

              case 1:
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

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var options = {
        timeZone: "Asia/Kathmandu",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      };
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          requestcount = _props.requestcount;

      return _react2.default.createElement(Row, { positive: request.loanstatus == "Approved", negative: request.loanstatus == "Rejected", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, request.clientaddress), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, request.loanamount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, new Date(parseInt(request.loanapplydate)).toLocaleDateString("en-US", options)), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, request.loanstatus), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_routes.Link, { route: '/finance/' + request.clientaddress + '/pages/tranhistory', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', value: request.clientaddress, basic: true, onClick: this.onView, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Loan History')))));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGZpbnJlcXVlc3Ryb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJFdGhGaW5hbmNlIiwiTGluayIsIlJlcXVlc3RSb3ciLCJvblZpZXciLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJvcHRpb25zIiwidGltZVpvbmUiLCJob3VyMTIiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiUm93IiwiQ2VsbCIsInByb3BzIiwiaWQiLCJyZXF1ZXN0IiwicmVxdWVzdGNvdW50IiwibG9hbnN0YXR1cyIsImNsaWVudGFkZHJlc3MiLCJsb2FuYW1vdW50IiwiRGF0ZSIsInBhcnNlSW50IiwibG9hbmFwcGx5ZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OztvTkFDSixBOzJGQUFTLGlCQUFBLEFBQU8sT0FBUDtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDUDt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFNLGNBRFgsQUFDUCxBQUFnQzs7bUJBRHpCO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0E7Ozs7Ozs7Ozs7NkJBR0EsQUFDUDtVQUFNO2tCQUFVLEFBQ0YsQUFDVDtnQkFGVyxBQUVGLEFBQ1Q7Y0FIVyxBQUdKLEFBQ1A7Z0JBSlcsQUFJSCxBQUNUO2dCQU5HLEFBQ1AsQUFBZ0IsQUFLSjtBQUxJLEFBQ1g7VUFGRSxBQVFDLE1BUkQsQUFRZSx1QkFSZixBQVFDO1VBUkQsQUFRTSxPQVJOLEFBUWUsdUJBUmYsQUFRTTttQkFDeUIsS0FUL0IsQUFTb0M7VUFUcEMsQUFTQyxZQVRELEFBU0M7VUFURCxBQVNLLGlCQVRMLEFBU0s7VUFUTCxBQVNjLHNCQVRkLEFBU2MsQUFDckI7OzZCQUNHLGNBQUQsT0FBSyxVQUFVLFFBQUEsQUFBUSxjQUF2QixBQUFxQyxZQUFZLFVBQVUsUUFBQSxBQUFRLGNBQW5FLEFBQWlGO29CQUFqRjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFGRixBQUVFLEFBQWUsQUFDZixnQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFIRixBQUdFLEFBQWUsQUFDZiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFRO0FBQVI7QUFBQSxhQUFRLEFBQUksS0FBSyxTQUFTLFFBQW5CLEFBQUMsQUFBUyxBQUFpQixnQkFBM0IsQUFBNEMsbUJBQTVDLEFBQStELFNBSnhFLEFBSUUsQUFBTyxBQUF1RSxBQUM5RSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFMRixBQUtFLEFBQWUsQUFDZiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxBQUFDLDhCQUFLLHFCQUFtQixRQUFuQixBQUEyQixnQkFBakM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBUSxRQUE3QixBQUFxQyxlQUFlLE9BQXBELE1BQTBELFNBQVMsS0FBbkUsQUFBd0U7b0JBQXhFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FWUixBQUNFLEFBTUUsQUFDQSxBQUNFLEFBQ0UsQUFNVDs7Ozs7QUE5QnNCLEEsQUFpQ3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZpbnJlcXVlc3Ryb3cuanMiLCJzb3VyY2VSb290IjoiRDovc2Fuaml2Zm9sZGVyL3Byb2plY3RzL2V0aEZpbmFuY2UifQ==