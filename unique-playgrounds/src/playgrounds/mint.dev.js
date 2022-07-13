const { getUsage } = require('../lib/cli');

const { UniqueHelper } = require('../lib/unique');
const { SilentLogger, Logger } = require('../lib/logger');
const { subToEth } = require('../helpers/marketplace');
const { getConfig } = require('./config');

const main = async (args) => {
  console.log('Mint test,', args[0]);

  let uniqueHelper;
  let collectionId = null;
  let alice;

  const config = getConfig();
  const loggerCls = config.silentLogger ? SilentLogger : Logger;
  uniqueHelper = new UniqueHelper(new loggerCls());
  if(config.forcedNetwork) uniqueHelper.forceNetwork(config.forcedNetwork);
  await uniqueHelper.connect(config.wsEndpoint);
  alice = uniqueHelper.util.fromSeed(config.mainSeed);


  let collection = {
    name: 'Resumes7',
    description: 'test description 7',
    tokenPrefix: 'res7',
    properties: [{key: 'is_substrate', value: 'true'}, {key: '_old_schemaVersion', value: 'Unique'}, {key: '_old_offchainSchema', value: 'https://avatars.githubusercontent.com/u/7943272?s=200&v=4&id={id}'}],
    tokenPropertyPermissions: [{key: 'name', permission: {mutable: false, collectionAdmin: true, tokenOwner: false}}, 
                               {key: '_old_schemaVersion', permission: {mutable: false, collectionAdmin: true, tokenOwner: false}},
                               {key: '_old_offchainSchema', permission: {mutable: false, collectionAdmin: true, tokenOwner: false}} 
                              ],
    limits: {
      ownerCanTransfer: true
    }
  }
  collectionId = (await uniqueHelper.mintNFTCollection(alice, collection)).collectionId;
  const collectionInfo = await uniqueHelper.getCollection(collectionId);
  console.log("collectionInfo = ", collectionInfo);

  const _old_schemaVersion = await uniqueHelper.getCollectionSchemaVersion(collectionId);
  console.log("_old_schemaVersion = ", _old_schemaVersion);

  const _old_offchainSchema = await uniqueHelper.getCollectionOffChainSchema(collectionId);
  const _old_constOnChainSchema = await uniqueHelper.getCollectionOnChainSchema(collectionId);

  console.log("_old_offchainSchema = ", _old_offchainSchema);
  console.log("_old_constOnChainSchema = ", _old_constOnChainSchema);

  const result = await uniqueHelper.mintNFTToken(alice, {collectionId, owner: alice.address, properties: [{key: 'name', value: 'Bryan Foreman'},
                              
                              {key: '_old_offchainSchema', value: 'https://avatars.githubusercontent.com/u/7943272?s=200&v=4&id={id}'},
                              //{key: '_old_schemaVersion', value: 'Unique'}
                            
                            ]});    
  const tokenData = await uniqueHelper.getToken(collectionId, result.tokenId);

  console.log("tokenData = ", tokenData);

  await uniqueHelper.disconnect();

}

module.exports = {
  main,
  description: 'Resumere Mint Test playground',
  help: getUsage('npm run -- playground mint.dev', {positional: [{key: 'name', help: 'Name of collection'}], help: 'Playground to mint resumes'})
}

