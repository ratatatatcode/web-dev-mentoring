const express = require('express');
const app = express();
const path = require('path');

const auth = require('./routes/authRoutes');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/", auth);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});