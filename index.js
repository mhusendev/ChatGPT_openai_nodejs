
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs')
const routing = require('./router/routes')
app.use('/',[routing])
app.listen(3000,()=>{
    console.log('app running...')
})