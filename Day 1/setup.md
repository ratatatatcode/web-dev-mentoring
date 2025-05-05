**Before we continue learning, do you really like web development? Is it truly your choice? What makes you want to do it? To impress your crush, friends, or relatives? To be the next Zuckerberg?**<br>

Okay... don't tell me — keep it to yourself. But if the answer is yes, always remind yourself of that answer when you feel tired or start losing motivation.

Enough of that. I know you hate studying, but let’s move forward. I won’t provide all the details, but this will serve as a guide to help you start your web development journey.

Stop using only HTML, CSS, and JS... and start getting comfortable with...

**Express JS**

**How to setup ExpressJS (NodeJS Framework)?**<br>
You can either copy this or use it as a reference. However, installing packages yourself is recommended. Learning by trying is the best teacher for me.<br>

```js
// package.json
{
  "name": "project-name",
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
    "prettier-plugin-ejs": "^1.0.3"
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
You may install nodemon globally...
```
npm install -g nodemon prettier prettier-plugin-ejs
```
During the development process, you may choose not to include EJS and CSS so that the server doesn't refresh every time.

Now add a new file and name it **.prettierrc**, then copy and paste this,
```
{
  "plugins": ["prettier-plugin-ejs"],
  "overrides": [
    {
      "files": "*.ejs",
      "options": {
        "parser": "html"
      }
    }
  ]
}
```
This will help you format everything when you run **npm run format**, or you can simply use the **Prettier** extension.

The difference is that npm run format often relies on a script defined in the project, whereas the Prettier extension formats the code directly within the editor.

**Folder Structure**<br>
This is how I will construct my folder structure,
```
project_name/
- config/              # Configuration files (e.g., DB connections)
- controllers/         # Route controller logic
- node_modules/        # Node dependencies
- public/              # Static assets (CSS, JS, images)
- routes/              # Express route definitions
- utils/               # Utility/helper functions
- views/               # Frontend views (e.g., EJS templates)
- .env                 # Environment variables
- .gitignore           # Files/folders to ignore in git
- .prettierrc          # Prettier configuration for code formatting
- package-lock.json    # Auto-generated dependency lock file
- package.json         # Project metadata and scripts
- README.md            # Project documentation
- server.js            # Entry point of the application
```

You should never forget to include a **.gitignore** file if you’re working with GitHub. Make sure to add node_modules, .env, and any secret keys to it.

**Never push your .env, node_modules, or any secret keys to Git!**

Inside your **.env**, add the following:
```
PORT=5000
SECRET_SESSION_KEY=SECRET
```
This is just for testing, not for actual production use.

**Setup your server.js**
```js
require('dotenv').config();
const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");

app.use(
    session ({
        secret: process.env.SECRET_SESSION_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", res.send("Hello World"));

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});
```

You can start running it by typing **npm run dev** or **npx nodemon server**.

If it works, congratulations on your first 'Hello World'!"

Just to share something — I always start with 'Hello World' because, like many great stories, everything begins with a simple 'hello.' And also, to honor the tradition of most programmers, whose first code is 'Hello World'.
