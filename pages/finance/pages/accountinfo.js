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
   let fininfo = await instance.methods.fininfoStructs(instancemanager).call({ from: instancemanager });
  // let fininfo = await instance.methods.GetFinInfo(0).call({ from: instancemanager });
   return { instance: instance, instancemanager: instancemanager, instaddr: props.query.address , fininfo: fininfo };
  }

  render() {
    let addr;
    return(
      <Layout>
      <Grid>
      <Grid.Column width={10}>
      <h2>Account Information</h2>
      </Grid.Column>
      </Grid>
            <h3>Account Manager : {this.props.instancemanager}</h3>
            <h3>Account Deployed Address : {this.props.instaddr}</h3>
            <h3>Finance Name : {this.props.fininfo[0]}</h3>
            <h3>Finance Address : {this.props.fininfo[1]}</h3>
            <h3>Finance DOE : {this.props.fininfo[2]}</h3>
            <h3>Finance RegNo : {this.props.fininfo[3]}</h3>
      </Layout>
    );
  }
}

export default AccountInfo;
