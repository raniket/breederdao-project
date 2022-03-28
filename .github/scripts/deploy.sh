#!/bin/sh

ssh -V

# don't want to be prompted by ssh for first time remote hosts.
# alias ssh='ssh -o StrictHostKeyChecking=no'

echo "SSH key: $EC2_SSH_KEY"

touch .env && chmod 777 .env

SECRETS=$PRODUCTION_ENV_FILE

echo $SECRETS

for secret in $SECRETS; do
    echo $secret > .env
    echo $secret
done

ls -la

cat .env

echo "DONE....."