//import express

const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
//listen

app.listen(5002, () => {
    console.log('Server is running on port 5002');
})