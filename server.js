/**
 * @file This is the express server that will serve all the files, connects to the TWITTER's API and retrive the information for the front end.
 * @author Julian Correa
 */
const chalk = require('chalk')
const bodyParser = require('body-parser')
const { getTwits, postTwit } = require('./app/')
const { getTitle } = require('./app/getTitle')

/**
 * sockectIp to make connections reltime to ciient
 * @const
 */
const express = require("express")
/**
 * Express instance.
 */
const app = express()

app.set("view engine", "pug");
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
/**
 * PORT {number} if not set 8080 it will be used
 * @param
 */
const port = process.env.PORT || 8080

app.post('/post', (req, res) => {
  if(req.body.message === undefined && req.body.url === undefined && req.body.message !== '' && req.body.url !== '')
    res.json(new Error('params not found'))

  postTwit(req.body.message, req.body.url )
    .then((response) => {
      res.json({
        message: 'Posted to Twitter'
      })
    })
    .catch((error) => {
      res.json(error);
    })
});

app.all("/getTitle/:id/", (req, res) => {
  getTitle(req.params.id).then(response => {
    res.status(200).json(response.data)
  })
})

app.all("/getTwits/:lat/:long", (req, res) => {
	getTwits(req.params.lat, req.params.long).then((data) =>{
    res.status(200).json(data.data)
  })
})
app.all("/getTwits", (req, res) => {
	getTwits().then((data) =>{
    res.status(200).json(data.data)
  })
})
app.all("/*", (req, res) => {
	res.render("index")
})

app.listen(port, function(){
  console.log(chalk.blue(`server running in port ${port}`))
})