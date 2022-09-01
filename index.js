const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
    // rollbar.log("Access HTML successfully");
})


const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
