const express = require('express')
const router = require('./api')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
app.use(bodyParser())
app.use(cookieParser())

app.use('/api', router)


app.listen(3001,()=>{
  console.log('服务器开启')
})