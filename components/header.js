import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from '../routes';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import { Router } from '../routes';

class Header extends Component {
  onClick = async (event) => {
    event.preventDefault();
    let accdash = await web3.eth.getAccounts();
    const factorydash = await factory.methods.deployedAddress(accdash[0]).call();
    if (factorydash[2] == 'finance'){
      Router.pushRoute(`/finance/${factorydash[0]}/dashboard/`);
    }

    if(factorydash[2] == 'client'){
      Router.pushRoute(`/Customer/${factorydash[0]}/dashboard/`);
    }
   }

  render(){
    return (
      <Menu style={{ marginTop: '10px' }}>
        <Link route="/">
          <a className="item">EthFinance</a>
        </Link>

        <Menu.Menu position='right'>
        <Button onClick={this.onClick} primary> Goto Dashboard</Button>
        <Link route="/ethKosh/login">
          <a className="item">Login</a>
        </Link>

        </Menu.Menu>
      </Menu>
    )
  }
};

export default Header;
