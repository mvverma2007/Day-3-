//import express

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    return res.send("Hi Amy How are you?");
})
//listen

app.listen(5002, () => {
    console.log('Server is running on port 5002');
})