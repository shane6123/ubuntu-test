const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
res.send("Hello Ubunto...")
});

app.listen(5000,()=>{
    console.log("Server is run on 5000");
});