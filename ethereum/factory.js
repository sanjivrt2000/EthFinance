import web3 from './web3';
import ethFinanceFactory from './build/FinappFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ethFinanceFactory.interface, '0x1109A77035D054D619Ae72B36228D5451F391D81')
);

instance.options.address = '0x1109A77035D054D619Ae72B36228D5451F391D81';
export default instance;
