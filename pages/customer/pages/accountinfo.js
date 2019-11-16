import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message, Grid} from 'semantic-ui-react';
import Layout from '../../../components/layout';
import { Link } from '../../../routes';
import factory from '../../../ethereum/factory';
import EthFinance from '../../../ethereum/ethFinance';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

let instance;
class AccountInfo extends Component {
  static async getInitialProps(props){
   instance = EthFinance(props.query.address);
   const instancemanager = await instance.methods.accountmanager().call();
   let perinfo = await instance.methods.clientinfoStructs(instancemanager).call({ from: instancemanager });
   console.log(perinfo);
   return { instance: instance, instancemanager: instancemanager, instaddr: props.query.address , perinfo: perinfo };
  }

  render() {
    let addr;
    return(
      <Layout>
      <Grid>
      <Grid.Column width={10}>
      <h2>Customer Account Information</h2>
      </Grid.Column>
      
      </Grid>
            <h3>Account Manager : {this.props.instancemanager}</h3>
            <h3>Account Deployed Address : {this.props.instaddr}</h3>
            <h3>Customer Name : {this.props.perinfo[0] + ' ' + this.props.perinfo[1]}</h3>
            <h3>Permanent Residence: {this.props.perinfo[2]} </h3>
            <h3>Date of Birth : {this.props.perinfo[3]}</h3>
            <h3>Citizenship Number : {this.props.perinfo[4]}</h3>
            <h3>Customer's Father Name : {this.props.perinfo[5]}</h3>
      </Layout>
    );
  }
}

export default AccountInfo;
