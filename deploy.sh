#!/bin/bash
cd /var/www/node/mail-system && 
git fetch && 
git pull && 
cd client &&
yarn &&
yarn build &&
cd .. &&
cd server && 
yarn && 
pm2 restart app.js && 
cd .. 
exit 0
