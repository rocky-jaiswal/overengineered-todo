'use strict'

const file = require('fs')
const { spawnSync } = require('child_process')

const environment = process.argv[2]
const passphrase = process.argv[3]
const outputFile = `secrets/${environment}.yaml`

try {
  file.accessSync(outputFile)
  file.unlinkSync(outputFile)
} catch (err) {}

const gpgCmd = spawnSync('gpg', [
  '--output',
  outputFile,
  '--batch',
  '--passphrase',
  passphrase,
  '--decrypt',
  `./secrets/${environment}.yaml.gpg`,
])

console.log(`stderr: ${gpgCmd.stderr.toString()}`)
console.log(`stdout: ${gpgCmd.stdout.toString()}`)
