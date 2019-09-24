const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '/public', 'index.html'))
})

var port =  3000;
app.listen(port, function () {
    console.log(' listening on port %s', port);
});