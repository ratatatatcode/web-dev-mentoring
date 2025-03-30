const express = require('express');
const app = express();
const path = require(`path`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// localhost:3000/
app.get('/', (req, res) => {
    res.render("landingpage.ejs");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});