const express = require('express')
const { helloRoute } = require('./routes')
const app = express()

app.get('/hello', helloRoute)

app.listen(8000,() => console.log('server running on http://localhost:8000'))