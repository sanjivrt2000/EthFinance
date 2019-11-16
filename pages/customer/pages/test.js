import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message, Grid} from 'semantic-ui-react';
import Layout from '../../../components/layout';
import { Link } from '../../../routes';
import factory from '../../../ethereum/factory';
import EthFinance from '../../../ethereum/ethFinance';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

let instance;
class FinanceList extends Component {
  static async getInitialProps() {
  const campaigns = await factory.methods.GetDeployedFinAddr().call();
  return { campaigns: campaigns};
}

renderCampaigns() {
  const items = this.props.campaigns.map(address => {
    return {
      header: address,
      description: (
        <Link route='#'>
          <a>View Details</a>
        </Link>
      ),
      fluid: true
    };
  });

  return <Card.Group items={items} />;
 }

render() {

  return (
    <Layout>
      <div>
        <h3>Finance List</h3>
        
          {this.renderCampaigns()}
      </div>
    </Layout>
  );
}
}

export default FinanceList;
