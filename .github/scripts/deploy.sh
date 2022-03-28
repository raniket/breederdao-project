#!/bin/sh

ssh -V

# don't want to be prompted by ssh for first time remote hosts.
alias ssh='ssh -o StrictHostKeyChecking=no'

echo "SSH key: $EC2_SSH_KEY"

echo "DONE....."