**How to setup ExpressJS (NodeJS Framework)?**<br>
You may just copy this or use as a reference. Installing packages yourself is recommended. Learning from trying is the best teacher... for me.<br>

```js
// package.json
{
  "name": "hemocart",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npx nodemon --ext js,mjs,cjs,json,ejs,css server.js",
    "format": "prettier --write ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.4.7",
    "ejs": "^3.1.10",
    "express": "^5.1.0",
    "express-ejs": "^2.0.0",
    "express-session": "^1.18.1",
    "firebase": "^11.6.0",
    "path": "^0.12.7"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

But first let's differentiate what the difference between dependencies and devDependencies.<br><br>
**dependencies**
- These are required to run the project.
- They are used in production (live, deployed app).
<br>

**devDependencies**
- These are only needed during development.
- Not included in production builds.
<br>

**Initialize a New Project**
Now, let's start how can we manually do that...<br>
with this, it will automatically setup your package.json file.
```
npm init -y
```
<br>
Now go to your package.json and edit the 'index.js' to server.js.

**Install Runtime Dependencies**<br>
```
npm install dotenv ejs express express-ejs express-session firebase path
```

**Install Development Dependencies**<br>
```
npm install --save-dev nodemon prettier autoprefixer daisyui prettier-plugin-ejs
```

**Update your scripts**
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "npx nodemon --ext js,mjs,cjs,json,ejs,css server.js",
  "format": "prettier --write ."
}
```
You may use install the nodemon on global but setting it up in the script will come in handy soon. Some hosting website requires it.
```
npm install -g nodemon
```
But through the development process, you may not include the ejs and css so it won't refresh the server everytime.
