import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message, Grid, Table} from 'semantic-ui-react';
import Layout from '../../../components/layout';
import { Link } from '../../../routes';
import factory from '../../../ethereum/factory';
import EthFinance from '../../../ethereum/ethFinance';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';
import TranHisRequestRow from '../../../components/tranhisrequestrow';

class TranHistory extends Component {
  static async getInitialProps(props){
    const { address } = props.query;
    const clientAddress = props.query.address;
    const requestCount = await factory.methods.getRequestCount().call();
    const accounts = await web3.eth.getAccounts();
    const finaddress = accounts[0];
    const requests = await Promise.all(
      Array(parseInt(requestCount)).fill().map((element, index) => {
        return factory.methods.loanpool(index).call();
      })
    );
    return { address, requests, requestCount, finaddress};
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      if(request.clientaddress == this.props.address){
      return <TranHisRequestRow
        key={index}
        id={index}
        request={request}
        address={this.props.address}
        requestcount={this.props.requestCount}
        finaddress={this.props.finaddress}
        />;
      }
    })
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
      <Grid>
      <Grid.Column width={10}>
      <h3>Loan Request History</h3>
      </Grid.Column>

      <Table>
        <Header>
          <Row>
            <HeaderCell>LoanId</HeaderCell>
            <HeaderCell>Finance Address</HeaderCell>
            <HeaderCell>Client Address</HeaderCell>
            <HeaderCell>Loan Amount (NPR)</HeaderCell>
            <HeaderCell>Applied Date</HeaderCell>
            <HeaderCell>Status</HeaderCell>
            <HeaderCell>Action</HeaderCell>
            <HeaderCell>Action</HeaderCell>
          </Row>
        </Header>
        <Body>
          {this.renderRows()}
          <Row>
      </Row>
        </Body>
      </Table>
      </Grid>
      </Layout>
    )
  }

}
export default TranHistory;
