const fs = require('fs')
const yaml = require('js-yaml')

const secretFileName = `./secrets/${process.env.NODE_ENV}.yaml`
const secrets = yaml.load(fs.readFileSync(secretFileName, 'utf8'))

module.exports = {
  server: {
    port: 3001,
  },
  crypto: {
    keysSuffix: '_development',
    keyid: 'c494fdc2-183e-476a-88c1-d6796763bbac'
  },
  ...secrets,
}
