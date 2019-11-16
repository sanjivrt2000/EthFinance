import web3 from './web3';
import EthFinance from './build/Finapp.json';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(EthFinance.interface), address );
};
