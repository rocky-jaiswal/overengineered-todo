'use strict'

const { spawnSync } = require('child_process')

const environment = process.argv[2]
const inputFile = `secrets/${environment}.yaml`

const gpgCmd = spawnSync('gpg', ['-c', inputFile])

console.log(`stderr: ${gpgCmd.stderr.toString()}`)
console.log(`stdout: ${gpgCmd.stdout.toString()}`)
