FROM node:slim

# DEFINING LABEL AND DIRECTORY
LABEL Jeff Mizner <jeffery.mizner@gmail.com>
WORKDIR /app

# COPY ITEMS FROM THE ROOT
COPY package.json /app/package.json
COPY index.js     /app/index.js
COPY dal.js       /app/dal.js
# Front End Files
COPY public/index.html        /app/public/index.html 
COPY public/activity.js       /app/public/activity.js
COPY public/context.js        /app/public/context.js
COPY public/createaccount.js  /app/public/createaccount.js
COPY public/deposit.js        /app/public/deposit.js   
COPY public/home.js           /app/public/home.js 
COPY public/index.js          /app/public/index.js  
COPY public/login.js          /app/public/login.js 
COPY public/navbar.js         /app/public/navbar.js  
COPY public/withdraw.js       /app/public/withdraw.js
# Image Files
COPY /public/bank.jpg         app/public/bank.jpg 
COPY /public/bank.png         app/public/bank.png  
COPY /public/glogo.png        app/public/glogo.png
COPY /public/scrooge.png      app/public/scrooge.png

# INSTALLING DEPENDENCIES
RUN npm install firebase
RUN npm install --production

COPY . .

CMD ["node", "index.js"]