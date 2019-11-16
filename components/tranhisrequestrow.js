import React, { Component } from 'react';
import { Table, Button, Select } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import EthFinance from '../ethereum/ethFinance';
import { Link } from '../routes';
import factory from '../ethereum/factory';
import { Router } from '../routes';

class TranHisRequestRow extends Component {
  state = {
   loading: false
 };

  onApprove = async (event) => {
    event.preventDefault();
   const approveStatus = event.currentTarget.id;
   let accounts = await web3.eth.getAccounts();
   this.setState({ loading: true });
   try{
     await factory.methods.changeLoanStatus(this.props.id, approveStatus).send({ from:accounts[0], gas: 5000000});
    } catch(err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
    const returnaddress = await factory.methods.deployedAddress(accounts[0]).call();
    Router.pushRoute(`/finance/${returnaddress[0]}/pages/loanpool/`);
};

onReject = async (event) => {
  event.preventDefault();
  const approveStatus = event.currentTarget.id;
 let accounts = await web3.eth.getAccounts();
 this.setState({ loading: true });
 try{
   await factory.methods.changeLoanStatus(this.props.id, approveStatus).send({ from:accounts[0], gas: 5000000});
  } catch(err) {
    this.setState({ errorMessage: err.message });
  }
  this.setState({ loading: false });
  const returnaddress = await factory.methods.deployedAddress(accounts[0]).call();
  Router.pushRoute(`/finance/${returnaddress[0]}/pages/loanpool/`);
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

    const { id, request, requestcount, finaddress} = this.props;
    return (
      <Row disabled={request.loanstatus == "Approved" || request.loanstatus == "Rejected"} positive={request.loanstatus == "Approved"} negative={request.loanstatus == "Rejected"}>
        <Cell>{id}</Cell>
        <Cell>{request.financeaddress}</Cell>
        <Cell>{request.clientaddress}</Cell>
        <Cell>{request.loanamount}</Cell>
        <Cell>{(new Date(parseInt(request.loanapplydate))).toLocaleDateString("en-US",options)}</Cell>
        <Cell>{request.loanstatus}</Cell>
        <Cell>
        {(request.financeaddress == finaddress) && (request.loanstatus == "Applied") ? (
        <Button color="green" id={"Approved"} loading={this.state.loading} basic onClick={this.onApprove}>
          Approve
        </Button>
      ) : null}
      </Cell>
      <Cell>
      {(request.financeaddress == finaddress) && (request.loanstatus == "Applied") ? (
        <Button color="red" id={"Rejected"} loading={this.state.loading} basic onClick={this.onReject}>
          Reject
        </Button>
      ) : null}
      </Cell>
      </Row>
    );
  }
}

export default TranHisRequestRow;
