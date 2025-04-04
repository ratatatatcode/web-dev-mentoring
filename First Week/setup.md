**How to setup ExpressJS (NodeJS Framework)?**<br>
You can either copy this or use it as a reference. However, installing packages yourself is recommended. Learning by trying is the best teacher for me.<br>

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
    "nodemon": "^3.1.9",
    "prettier": "^3.5.3",
    "prettier-plugin-ejs": "^1.0.3",
  }
}
```

But first let's differentiate what the difference between dependencies and devDependencies.<br>
**dependencies**
- These are required to run the project.
- They are used in production (live, deployed app).

**devDependencies**
- These are only needed during development.
- Not included in production builds.
<br>

**Initialize a New Project**
Now, let's start how can we manually do that...<br>
With this, your package.json file will be set up automatically.
```
npm init -y
```
Now, go to your package.json and change 'index.js' to 'server.js'.

**Install Runtime Dependencies**<br>
```
npm install dotenv ejs express express-ejs express-session firebase path
```

**Install Development Dependencies**<br>
```
npm install --save-dev nodemon
```

**Update your scripts**
```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "npx nodemon --ext js,mjs,cjs,json,ejs,css server.js",
  "format": "prettier --write ."
}
```
You may install nodemon globally, but setting it up in the script will come in handy soon. Some hosting services require it.
```
npm install -g nodemon prettier prettier-plugin-ejs
```
During the development process, you may choose not to include EJS and CSS so that the server doesn't refresh every time.
