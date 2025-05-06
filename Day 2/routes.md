> 👩 **Woah, routes...**<br>
> 👩 What are routes!?
>
> 👨‍💻 Normally, you won't need to use routes for a basic application, but practicing with a proper folder structure can make your development easier to navigate and understand.

Open the code in server.js and compare it to the code below...
```js
// ...rest of the code
app.get("/", (req, res) => {
    res.render("auth/login.ejs");
});

app.get("/signup", (req, res) => {
    res.render("auth/signup.ejs");
});

app.get("/recovery", (req, res) => {
    res.render("auth/forgot-password.ejs");
});

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});
```
> 👨‍💻 This will function the same, but would you handle everything — GET, POST, UPDATE, and DELETE in server.js?
> 
> 👩 **But seriously, what are routes (for)?**<br>
>
> 👨‍💻 Routes in Express.js are used to define the endpoints for HTTP requests (like GET, POST, PUT, DELETE). These routes determine how your application will respond when users access specific URLs or interact with your app.
> 👨‍💻 Instead of handling all the routes directly in server.js, you can organize them into separate files for better structure, especially as your application grows. This makes your code easier to maintain and scale.

**Try running the program again and visit these urls**
```
localhost:5000/
localhost:5000/signup
localhost:5000/recovery
```

> 👩 Woah, what am I seeing, right now?!<br>
> 👨‍💻 They are probably the pages being called from the views folder.<br>
> 👩 But how does it know where the HTML or EJS came from?
>
> 👨‍💻 Simple, because of this...
```js
app.set("view engine", "ejs");
```

**BONUS**<br>
Check one page from the views/auth. Have you noticed the...
```js
<%- include('../partials/head') %>
```
It feels like creating a component in React, but it doesn’t work the same way, and it’s up to you to figure it out. No spoonfeeding this time.
