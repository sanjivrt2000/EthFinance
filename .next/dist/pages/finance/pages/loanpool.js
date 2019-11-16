'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _finrequestrow = require('../../../components/finrequestrow');

var _finrequestrow2 = _interopRequireDefault(_finrequestrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\sanjivfolder\\projects\\ethFinance\\pages\\finance\\pages\\loanpool.js?entry';


var LoanPool = function (_Component) {
  (0, _inherits3.default)(LoanPool, _Component);

  function LoanPool() {
    (0, _classCallCheck3.default)(this, LoanPool);

    return (0, _possibleConstructorReturn3.default)(this, (LoanPool.__proto__ || (0, _getPrototypeOf2.default)(LoanPool)).apply(this, arguments));
  }

  (0, _createClass3.default)(LoanPool, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        if (request.financeaddress == _this2.props.managerid) {
          return _react2.default.createElement(_finrequestrow2.default, {
            key: index,
            id: index,
            request: request,
            address: _this2.props.address,
            requestcount: _this2.props.requestCount,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Loan Requests')), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Client Address'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Loan Amount (NPR)'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Applied Date'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Status'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Action'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.renderRows()))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, instance, managerid, requestCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                instance = (0, _ethFinance2.default)(address);
                _context.next = 4;
                return instance.methods.accountmanager().call();

              case 4:
                managerid = _context.sent;
                _context.next = 7;
                return _factory2.default.methods.getRequestCount().call();

              case 7:
                requestCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return _factory2.default.methods.loanpool(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, managerid: managerid });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LoanPool;
}(_react.Component);

exports.default = LoanPool;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxmaW5hbmNlXFxwYWdlc1xcbG9hbnBvb2wuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTGFiZWwiLCJNZXNzYWdlIiwiR3JpZCIsIlRhYmxlIiwiTGF5b3V0IiwiTGluayIsImZhY3RvcnkiLCJFdGhGaW5hbmNlIiwid2ViMyIsIlJvdXRlciIsIlJlcXVlc3RSb3ciLCJMb2FuUG9vbCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJmaW5hbmNlYWRkcmVzcyIsIm1hbmFnZXJpZCIsImFkZHJlc3MiLCJyZXF1ZXN0Q291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJxdWVyeSIsImluc3RhbmNlIiwibWV0aG9kcyIsImFjY291bnRtYW5hZ2VyIiwiY2FsbCIsImdldFJlcXVlc3RDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImxvYW5wb29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFNLEFBQU8sQUFBTyxBQUFTLEFBQU07O0FBQzFELEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVSxBQUNqQixBQUFTLEFBQWM7Ozs7QUFDdkIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7O2lDQWdCUzttQkFDWDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNqRDtZQUFHLFFBQUEsQUFBUSxrQkFBa0IsT0FBQSxBQUFLLE1BQWxDLEFBQXdDLFdBQVUsQUFDbEQ7aUNBQU8sQUFBQztpQkFBRCxBQUNBLEFBQ0w7Z0JBRkssQUFFRCxBQUNKO3FCQUhLLEFBR0ksQUFDVDtxQkFBUyxPQUFBLEFBQUssTUFKVCxBQUllLEFBQ3BCOzBCQUFjLE9BQUEsQUFBSyxNQUxkLEFBS29COzt3QkFMcEI7MEJBQVAsQUFBTyxBQU9KO0FBUEk7QUFDTCxXQURLO0FBUU47QUFWSCxBQUFPLEFBV1IsT0FYUTs7Ozs2QkFhQTtVQUFBLEFBQ0MsU0FERCxBQUNtQyx1QkFEbkMsQUFDQztVQURELEFBQ1MsTUFEVCxBQUNtQyx1QkFEbkMsQUFDUztVQURULEFBQ2MsYUFEZCxBQUNtQyx1QkFEbkMsQUFDYztVQURkLEFBQzBCLE9BRDFCLEFBQ21DLHVCQURuQyxBQUMwQixBQUVqQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkEsQUFDQSxBQUNBLEFBR0EsbUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxtQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0Esc0NBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLGlDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFDQSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FSTixBQUNFLEFBQ0UsQUFNRSxBQUdKLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBbEJKLEFBQ0UsQUFDQSxBQUtBLEFBV0UsQUFDRyxBQUFLLEFBTWI7Ozs7OzJHQXpENEIsQTs7Ozs7bUJBQ25CO0EsMEJBQVksTUFBTSxBLE0sQUFBbEIsQUFDRjtBLDJCQUFXLDBCLEFBQUEsQUFBVzs7dUJBQ0osU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUJBQWpCLEFBQWtDLEE7O21CQUFwRDtBOzt1QkFDcUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGtCQUFoQixBLEFBQWtDOzttQkFBdkQ7QTs7eUNBQ2lCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUMzRDt5QkFBTyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsU0FBaEIsQUFBeUIsT0FBaEMsQUFBTyxBQUFnQyxBQUN4QztBQUZELEEsQUFEcUIsaUJBQ3JCLENBRHFCOzttQkFBakI7QTtpREFNQyxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQXFCLGNBQXJCLGNBQW1DLFdBQW5DLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaWSxBLEFBNkR2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJsb2FucG9vbC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9zYW5qaXZmb2xkZXIvcHJvamVjdHMvZXRoRmluYW5jZSJ9