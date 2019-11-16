import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import { Card, Button, Form, Label, Input, Message, Menu} from 'semantic-ui-react';
import Layout from '../components/layout';
import { Link } from '../routes';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

let accounts;
let p_inst_type;

class EthFinanceIndex extends Component {
  state = {
   errorMessage: '',
   loading: false
 };

  componentDidMount = async () => {
    let accforinit = await web3.eth.getAccounts();
    const addrforinit = await factory.methods.deployedAddress(accforinit[0]).call();
    if (addrforinit[1]){
      if(addrforinit[2] == 'finance'){
        Router.pushRoute(`/finance/${addrforinit[0]}/dashboard/`);
      }

      if(addrforinit[2] == 'client'){
        Router.pushRoute(`/customer/${addrforinit[0]}/dashboard/`);
      }
    }
  };

 onClick = async (event) => {
   event.preventDefault();
   p_inst_type = event.currentTarget.id;
    accounts = await web3.eth.getAccounts();
   this.setState({ loading: true });
   try{
     await factory.methods.createNewInstance(p_inst_type).send({ from: accounts[0], gas:'5000000' });
    } catch(err) {
      this.setState({ errorMessage: err.message });
    }
   this.setState({ loading: false });

    if(this.state.errorMessage == ''){
    if (p_inst_type == 1){
     const returnaddress = await factory.methods.deployedAddress(accounts[0]).call();
     Router.pushRoute(`/finance/${returnaddress[0]}/register/`);
    }
    else if (p_inst_type == 2) {
      const returnaddress = await factory.methods.deployedAddress(accounts[0]).call();
     Router.pushRoute(`/customer/${returnaddress[0]}/register/`);
    }
    else {
      this.setState({ errorMessage: err.message });
    }
  }

 }

  render() {
      return (
        <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>

        <Menu style={{ marginTop: '10px' }}>
          <Link route="/">
            <a className="item">EthFinance</a>
          </Link>

          <Menu.Menu position='right'>
          <Link route="/EthFinance/login">
            <a className="item">Login</a>
          </Link>

          </Menu.Menu>
        </Menu>

        <h3>Jump Into EthFinance Pool!!!</h3>

            <Button onClick={this.onClick} id={1} loading={this.state.loading} primary> Jump as Finance</Button>

            <Button onClick={this.onClick} id={2} loading={this.state.loading} primary> Jump as Customer</Button>

            <Message error header="Oops!" content={this.state.errorMessage} />

        </Container>
      );
    }

}

export default EthFinanceIndex;
