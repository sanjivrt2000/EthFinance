import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message, Grid, Table} from 'semantic-ui-react';
import Layout from '../../../components/layout';
import { Link } from '../../../routes';
import factory from '../../../ethereum/factory';
import EthFinance from '../../../ethereum/ethFinance';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';
import RequestRow from '../../../components/finrequestrow';

class LoanPool extends Component {
  static async getInitialProps(props){
    const { address } = props.query;
    const instance = EthFinance(address);
    const managerid = await instance.methods.accountmanager().call();
    const requestCount = await factory.methods.getRequestCount().call();
    const requests = await Promise.all(
      Array(parseInt(requestCount)).fill().map((element, index) => {
        return factory.methods.loanpool(index).call();
      })
    );

    return { address, requests, requestCount, managerid };
  }


  renderRows() {
    return this.props.requests.map((request, index) => {
      if(request.financeaddress == this.props.managerid){
      return <RequestRow
        key={index}
        id={index}
        request={request}
        address={this.props.address}
        requestcount={this.props.requestCount}
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
      <h3>Loan Requests</h3>
      </Grid.Column>

      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Client Address</HeaderCell>
            <HeaderCell>Loan Amount (NPR)</HeaderCell>
            <HeaderCell>Applied Date</HeaderCell>
            <HeaderCell>Status</HeaderCell>
            <HeaderCell>Action</HeaderCell>
          </Row>
        </Header>
        <Body>
          {this.renderRows()}
        </Body>
      </Table>
      </Grid>
      </Layout>
    )
  }

}
export default LoanPool;
