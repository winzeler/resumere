const { getUsage } = require('../lib/cli');

const main = async (args) => {
  console.log('Hello world,', args[0]);
}

module.exports = {
  main,
  description: 'Hello world playground',
  help: getUsage('npm run -- playground helloworld.dev', {positional: [{key: 'name', help: 'User name to greet'}], help: 'Playground to say "Hello world" to user'})
}

