'use strict'


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Bot = require('messenger-bot')


const PORT = process.env.PORT || 5000;
const FB_TOKEN = process.env.FB_TOKEN || '';
const FB_VERIFY = process.env.FB_VERIFY || '';
const FB_APP_SECRET = process.env.FB_APP_SECRET || '';


const handleMessage = require('./scripts/handleMessage')
const handlePostback = require('./scripts/handlePostback')


app.set('port', PORT)


// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))


// Process application/json
app.use(bodyParser.json())


let bot = new Bot({
  token: FB_TOKEN,
  verify: FB_VERIFY,
  app_secret: FB_APP_SECRET
})


bot.on('error', (err) => {
  console.log(err.message)
})


bot.on('postback', (payload, reply, actions) => {
  handlePostback(payload, reply, actions);
})


bot.on('message', (payload, reply, actions) => {
  handleMessage(bot, payload, reply, actions)
})


app.get('/', (req, res) => {
  return bot._verify(req, res)
})


app.post('/', (req, res) => {
  bot._handleMessage(req.body)
  res.end(JSON.stringify({status: 'ok'}))
})


// Spin up the server
app.listen(app.get('port'), () => {
  console.log('running on port', app.get('port'))
})
