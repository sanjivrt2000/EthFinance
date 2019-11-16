import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message, Grid} from 'semantic-ui-react';
import Layout from '../../../components/layout';
import { Link } from '../../../routes';
import factory from '../../../ethereum/factory';
import EthFinance from '../../../ethereum/ethFinance';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

class FinanceShowDetails extends Component {
  state = {
    loanamount : '',
    errorMessage : '',
    loading : false
  }

  static async getInitialProps(props){
    const instaddr = await factory.methods.deployedAddress(props.query.address).call();
    const financeinstance = EthFinance(instaddr[0]);
   const fininstmgr = await financeinstance.methods.accountmanager().call();
   let fininfo = await financeinstance.methods.fininfoStructs(fininstmgr).call({ from: fininstmgr });
   return { instance: financeinstance, fininstmgr: fininstmgr, instaddr: instaddr[0] , fininfo: fininfo };
  }

  onSubmit = async (event) => {
   event.preventDefault();
   this.setState({ loading: true, errorMessage: '' });


   //make request to apply loan
   try{
     const { loanamount, errorMessage } = this.state;
     let accounts = await web3.eth.getAccounts();
     let datenow = Date.now();
     //fillup for finloanRequest
     const clientaddress = await factory.methods.deployedAddress(accounts[0]).call();
     let customerinstance = EthFinance(clientaddress[0]);
     await customerinstance.methods.loanRequest(this.props.fininstmgr, accounts[0], this.props.instaddr, this.state.loanamount, datenow).send({ from: accounts[0], gas: 5000000});
     this.setState({ loading: false });
    Router.pushRoute(`/customer/${clientaddress[0]}/pages/loanpool`);
   } catch(err){
     this.setState({ errorMessage: err.message });
   }

 }

  render() {
    let addr;
    return(
      <Layout>
        <h2>Finance Information</h2>
        <h3>Account Manager : {this.props.fininstmgr}</h3>
        <h3>Account Deployed Address : {this.props.instaddr}</h3>
        <h3>Finance Name : {this.props.fininfo[0]}</h3>
        <h3>Finance Address : {this.props.fininfo[1]}</h3>
        <h3>Finance DOE : {this.props.fininfo[2]}</h3>
        <h3>Finance RegNo : {this.props.fininfo[3]}</h3>

            <h2>Apply For Loan</h2>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Form.Field>
              <Input
              value={this.state.loanamount}
                  onChange={event => this.setState({ loanamount: event.target.value })}
                 label='Numeric' labelPosition="right"
               />

              </Form.Field>

              <Message error header="Alert!" content={this.state.errorMessage} />

              <Button loading={this.state.loading} primary>Apply Now!</Button>
            </Form>

      </Layout>
    );
  }
}

export default FinanceShowDetails;
