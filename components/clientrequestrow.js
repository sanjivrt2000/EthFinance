import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import EthFinance from '../ethereum/ethFinance';

class RequestRow extends Component {
  render() {
    const options = {
         timeZone:"Asia/Kathmandu",
         hour12 : true,
         hour:  "2-digit",
         minute: "2-digit",
        second: "2-digit"
      }
    const { Row, Cell } = Table;
    const { id, request, requestcount} = this.props;
    return (
      <Row positive={request.loanstatus == "Approved"} negative={request.loanstatus == "Rejected"}>
        <Cell>{id}</Cell>
        <Cell>{request.financeaddress}</Cell>
        <Cell>{request.loanamount}</Cell>
        <Cell>{(new Date(parseInt(request.loanapplydate))).toLocaleDateString("en-US",options)}</Cell>
        <Cell>{request.loanstatus}</Cell>
        <Cell>View Details</Cell>
      </Row>
    );
  }
}

export default RequestRow;
