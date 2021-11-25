import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x07c0008A8E0E30cf8F17f48183cFDFF5D32Ca2fe'
);

export default instance;
