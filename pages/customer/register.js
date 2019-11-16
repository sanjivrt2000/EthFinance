import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message} from 'semantic-ui-react';
import Layout from '../../components/layout';
import { Link } from '../../routes';
import factory from '../../ethereum/factory';
import EthFinance from '../../ethereum/ethFinance';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

let instance;
class CustomerRegister extends Component {
  state = {
    firstname : '',
    lastname : '',
    address: '',
    dob : '',
    ctznno : '',
    fathername : '',
    message: '',
    errorMessage: '',
    loading: false
  };

  static async getInitialProps(props){
   instance = EthFinance(props.query.address);
   const instancemanager = await instance.methods.accountmanager().call();
    return { instance: instance, instancemanager: instancemanager, instaddr: props.query.address };
  }

  onSubmit = async (event) => {
   event.preventDefault();
   this.setState({ loading: true, errorMessage: '' });
 try{
   const instnow = EthFinance(this.props.instaddr);
   const { firstname, lastname, dob, ctznno, fathername } = this.state;
   await instnow.methods.setClientDetails(this.state.firstname, this.state.lastname, this.state.address,this.state.dob, this.state.ctznno, this.state.fathername).send({ from: this.props.instancemanager, gas: '5000000' });
   this.setState({ loading: false });
   Router.pushRoute(`/customer/${this.props.instaddr}/dashboard/`);
 } catch(err){
   this.setState({ errorMessage: err.message });
 }
}

  render() {
    return (
      <Layout>
    <h3>Register Here</h3>
    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
        <label>First name</label>
        <Input
        value={this.state.firstname}
            onChange={event => this.setState({ firstname: event.target.value })}
         />
      </Form.Field>

      <Form.Field>
        <label>Last name</label>
        <Input
        value={this.state.lastname}
            onChange={event => this.setState({ lastname: event.target.value })}
         />
      </Form.Field>

      <Form.Field>
        <label>Permanent Residence</label>
        <Input
        value={this.state.address}
            onChange={event => this.setState({ address: event.target.value })}
         />
      </Form.Field>

      <Form.Field>
        <label>Date of Birth</label>
        <Input
        value={this.state.dob}
            onChange={event => this.setState({ dob: event.target.value })}
             label='Date' labelPosition="right"
         />
      </Form.Field>

      <Form.Field>
        <label>Citizenship Number</label>
        <Input
        value={this.state.ctznno}
            onChange={event => this.setState({ ctznno: event.target.value })}
           label='Numeric' labelPosition="right"
         />
      </Form.Field>

      <Form.Field>
        <label>Father Name</label>
        <Input
        value={this.state.fathername}
            onChange={event => this.setState({ fathername: event.target.value })}
         />
      </Form.Field>

      <Message error header="Alert!" content={this.state.errorMessage} />
      <Message content={this.props.instancemanager} />
      <Message content={this.props.instaddr} />
      <Button loading={this.state.loading} primary>Register!</Button>
    </Form>

    </Layout>
    );
  }
}

export default CustomerRegister;
