#!/bin/sh

touch .env && chmod 600 .env

SECRETS=$PRODUCTION_ENV_FILE

echo $SECRETS

for secret in $SECRETS; do
    echo $secret >> .env
done

cat .env

echo "secret setup done!"