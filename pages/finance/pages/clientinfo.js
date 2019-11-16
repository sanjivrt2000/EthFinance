import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message, Grid} from 'semantic-ui-react';
import Layout from '../../../components/layout';
import { Link } from '../../../routes';
import factory from '../../../ethereum/factory';
import EthFinance from '../../../ethereum/ethFinance';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

let instance;
class ClientInfo extends Component {
  // static async getInitialProps(props){
  //  instance = EthFinance(props.query.address);
  //  const instancemanager = await instance.methods.accountManager().call();
  //  let fininfo = await instance.methods.GetFinInfo(0).call({ from: instancemanager });
  //  return { instance: instance, instancemanager: instancemanager, instaddr: props.query.address , fininfo: fininfo };
  // }

  render() {
    let addr;
    return(
      <Layout>
        <h3>Client Information</h3>
      </Layout>
    );
  }
}

export default ClientInfo;
