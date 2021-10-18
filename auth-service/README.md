# Auth Service

## Setup

1. Run `node bin/generateKeyPair.js <environment>` to generate JWT signing keys
2. Copy secret in "secrets/<environment>.yaml" (e.g. secrets/development.yaml)
3. Generate a strong secret/password somehow (e.g. https://1password.com/de/password-generator/)
4. Run `node bin/lockSecret.js <environment>` to encrypt secrets, use secret/password here (uses GPG)
5. Copy secret/password to .env
6. Run `docker-compose up --build`
