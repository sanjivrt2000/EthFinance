import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import EthFinance from '../ethereum/ethFinance';
import { Link } from '../routes';

class RequestRow extends Component {
  onView = async (event) => {
    console.log(event.currentTarget.value);
  };
  render() {
    const options = {
         timeZone:"Asia/Kathmandu",
         hour12 : true,
         hour:  "2-digit",
         minute: "2-digit",
        second: "2-digit"
      }
    const { Row, Cell } = Table;
    const { id, request, requestcount } = this.props;
    return (
      <Row positive={request.loanstatus == "Approved"} negative={request.loanstatus == "Rejected"}>
        <Cell>{id}</Cell>
        <Cell>{request.clientaddress}</Cell>
        <Cell>{request.loanamount}</Cell>
        <Cell>{(new Date(parseInt(request.loanapplydate))).toLocaleDateString("en-US",options)}</Cell>
        <Cell>{request.loanstatus}</Cell>
        <Cell>
        <Link route={`/finance/${request.clientaddress}/pages/tranhistory`}>
          <Button color="blue" value= {request.clientaddress} basic onClick={this.onView}>
            <b>Loan History</b>
          </Button>
        </Link>
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
