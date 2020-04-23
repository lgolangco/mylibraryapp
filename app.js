const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(jsonParser);

// set up author routes
const authorRouter = require('./routes/authorRouter');

// GET home page
app.get('/', (req, res) => {
    res.send('<H1>Library System</H1>') });

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/author-management', authorRouter);

app.post(authors, jsonParser, function (req, res){
    // add new author
})

app.listen(3000, () => {
    console.log('The library app is listening on port 3000!')
});