import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import { Link } from '../../routes';
import factory from '../../ethereum/factory';
import EthFinance from '../../ethereum/ethFinance';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

let instance;
class FinanceRegister extends Component {
  state = {
    fullName : '',
    fregno: '',
    faddress: '',
    doe: '',
    message: '',
    errorMessage: '',
    loading: false
  };

  static async getInitialProps(props){
   instance = EthFinance(props.query.address);
   const instancemanager = await instance.methods.accountmanager().call();
   console.log(instancemanager);
   return { instance: instance, instancemanager: instancemanager, instaddr: props.query.address };
  }

  onSubmit = async (event) => {
   event.preventDefault();
   this.setState({ loading: true, errorMessage: '' });
 try{
   const instnow = EthFinance(this.props.instaddr);
   const { fullName, fregno, faddress, doe } = this.state;
   await instnow.methods.setFinDetails(this.state.fullName, this.state.faddress, this.state.doe, this.state.fregno).send({ from: this.props.instancemanager, gas: '5000000' });
   this.setState({ loading: false });
   Router.pushRoute(`/finance/${this.props.instaddr}/dashboard/`);
 } catch(err){
   this.setState({ errorMessage: err.message });
 }
//  if (this.state.errorMessage == ''){
//    this.setState({ errorMessage: 'Account registered!!!' });
// }
}

  render() {
    return (
      <Layout>
    <h3>Register Here</h3>
    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
        <label>Full Name</label>
        <Input
        value={this.state.fullName}
            onChange={event => this.setState({ fullName: event.target.value })}
         />
      </Form.Field>

      <Form.Field>
        <label>Finance Address</label>
        <Input
        value={this.state.faddress}
            onChange={event => this.setState({ faddress: event.target.value })}
         />
      </Form.Field>

      <Form.Field>
        <label>Finance Registration Number</label>
        <Input
        value={this.state.fregno}
            onChange={event => this.setState({ fregno: event.target.value })}
           label='Numeric' labelPosition="right"
         />
      </Form.Field>

      <Form.Field>
        <label>Date of Establishment</label>
        <Input
        value={this.state.doe}
            onChange={event => this.setState({ doe: event.target.value })}
             label='Date' labelPosition="right"
         />
      </Form.Field>
      <Message error header="Alert!" content={this.state.errorMessage} />
     <Message content= {this.props.instancemanager} />
     <Message content= {this.props.instaddr} />
      <Button loading={this.state.loading} primary>Register!</Button>
    </Form>

    </Layout>
    );
  }
}

export default FinanceRegister;
