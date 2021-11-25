const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'replace other oval depart depth knee height alone attend math cereal property',
  'https://rinkeby.infura.io/v3/0cca7535bfef4bbeaf3a465a9a2f8ce7'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
