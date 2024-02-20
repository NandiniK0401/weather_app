const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname, '/public')
console.log(staticPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send('Weather')
})

app.listen(8080, () => {
    console.log("Connected to Port 8080");
});