import React, { Component } from 'react';
import { Card, Button, Form, Input, Label, Message, Grid} from 'semantic-ui-react';
import Layout from '../../components/layout';
import { Link } from '../../routes';
import factory from '../../ethereum/factory';
import EthFinance from '../../ethereum/ethFinance';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

let instance;
class FinanceDashboard extends Component {
  static async getInitialProps(props){
   instance = EthFinance(props.query.address);
   const instancemanager = await instance.methods.accountmanager().call();
    return { instance: instance, instancemanager: instancemanager, instaddr: props.query.address };
  }

//route={`/campaigns/${this.props.address}/requests`}
//        <Link route={`/campaigns/${this.props.address}/requests`}>

 //  renderCards() {
 //    const items = [
 //      {
 //        header: 'Account Information',
 //        meta: 'Address of Manager',
 //        description: 'The manager created this campaign and can create request to withdraw money',
 //        style: {overflowWrap: 'break-word' },
 //        href: `/finance/${this.props.instaddr}/pages/accountinfo`
 //      },
 //      {
 //        header: 'Client Information',
 //        meta: 'Minimum Contribution (wei)',
 //        description: 'You must contribute atleast this much of wei to become an approver',
 //        style: {overflowWrap: 'break-word' },
 //        href: `/finance/${this.props.instaddr}/pages/clientinfo`
 //      },
 //      {
 //        header: 'Loan Pool',
 //        meta: 'Number of requests',
 //        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
 //        style: {overflowWrap: 'break-word' },
 //        href: `/finance/${this.props.instaddr}/pages/loanpool`
 //      },
 //      {
 //        header: 'Transaction History',
 //        meta: 'Number of approvers',
 //        description: 'Number of people who have already contributed',
 //        style: {overflowWrap: 'break-word' },
 //        href: `/finance/${this.props.instaddr}/pages/tranhistory`
 //      }
 //
 //    ];
 //
 //    return <Card.Group items={items} />;
 // }

  render() {
    let addr;
    return(
      <Layout>
        <h3>Welcome to your Dashboard</h3>
        <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <div></div>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column>
                  <Link route={`/finance/${this.props.instaddr}/pages/accountinfo`}>
                    <a>
                      <Button primary>Account Information</Button>
                    </a>
                  </Link>
                  </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>
                <Link route={`/finance/${this.props.instaddr}/pages/clientinfo`}>
                  <a>
                    <Button primary>Client Information</Button>
                  </a>
                </Link>
                </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column>
              <Link route={`/finance/${this.props.instaddr}/pages/loanpool`}>
                <a>
                  <Button primary>Loan Pool</Button>
                </a>
              </Link>
              </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column>
            <Link route={`/finance/${this.props.instaddr}/pages/tranhistory`}>
              <a>
                <Button primary>Transaction History</Button>
              </a>
            </Link>
            </Grid.Column>
  </Grid.Row>

          </Grid>
      </Layout>
    );
  }
}

export default FinanceDashboard;
