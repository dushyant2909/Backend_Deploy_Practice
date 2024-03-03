require('dotenv').config()

const express = require('express')
const app = express() //Create an instance of express 
// To use it anywhere 
// const port = 4000 // Where your server will respond
const port = process.env.PORT || 4000

// Get request
// It means when any request comes then send respond
app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/meet', (req, res) => {
    res.send('<h1>How are you?</h1>');
})

// A port where your server keeps on listening
app.listen(port, () => {
    console.log(`Running fine on port ${port} `);
})
