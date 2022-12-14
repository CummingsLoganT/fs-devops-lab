const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(express.json())
app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '6f7867b33bb34fcea4b3daa3b40de00d',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
    rollbar.log("Access HTML successfully");
})


const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
