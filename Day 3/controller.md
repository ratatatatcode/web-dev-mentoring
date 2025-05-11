> 👨‍💻 Hey, be curious and examine every line.<br>
> 👨‍💻 If and only if you have all the time in the world...
>
> 👨‍💻 Or just ask ChatGPT and say, "Hi, I need an explanation for each line..."
>
> 👨‍💻 Just a small reminder: **learn those lines and don’t rely on vibe coding**.
>
> 👨‍💻 **I guess I talked too much. How about we talk about controllers?**<br>
Controllers are files or functions that contain the logic for handling incoming requests. Instead of putting all your logic directly in the route files (like authRoutes.js), controllers let you separate concerns: routes handle the **"what path?"** and controllers handle the **"what to do?"**.

Try running the code and open **localhost:5000/login**. Input a random value just for testing.

Now, take a look at the routes and controllers folders...

It’s behaving the same way, but with the POST HTTP request, where you can actually communicate with the frontend (the EJS) and your backend (Express.js).

**BONUS**<br>
**express.json()** is used to handle JSON payloads from the frontend (typically for AJAX/fetch requests).
```js
// server.js
app.use(express.json());

// authController.js
exports.handleLogin = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.send("Logging in...");
};

// views/auth/login.ejs
event.preventDefault();

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

try {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });
}
```

**express.urlencoded()** is used to handle form data (submitted using traditional HTML forms).
```js
// server.js
app.use(express.urlencoded({ extended: true }));

// views/auth/login.ejs
<form action="/api/auth/login" method="POST">
    <input type="text" id="username" name="username" placeholder="Username">
    <input type="password" id="password" name="password" placeholder="Password">
    <button type="submit">Login</button>
</form>
```

> 👨‍💻 Just try to understand it a bit, and we’ll see how it works after this.
>
> 👩 For real?!
>
> 👨‍💻 Yes, we will be using Firebase now. F-I-R-E-B-A-S-E!
