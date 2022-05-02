const express = require('express')
const app = express()
const port = 3000

mongodb+srv://zja27:abcd1234@cluster0.crhbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})