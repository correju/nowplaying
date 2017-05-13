/**
 * @file This is the express server that will serve all the files, connects to the TWITTER's API and retrive the information for the front end.
 * @author Julian Correa
 */
const chalk = require('chalk')
const {getTwits$} = require('./app/')
const moment = require('moment')
/**
 * express module
 * @const
 */
const express = require("express")
/**
 * Express instance.
 */
const app = express()

app.set("view engine", "pug");
app.use(express.static('public'));

/**
 * PORT {number} if not set 8080 it will be used
 * @param
 */
const port = process.env.PORT || 8080

app.all("/*", (req, res) => {
	res.render("index")
})

/*let i = 0
getTwits$.subscribe(
  data => {
    i++

      const relativeTime = 'empty'
    console.log(chalk.green(`${i} - ${relativeTime} - ${data.text}
    `))
  },
  err => {
  console.log(chalk.red(err))
  },
  complete => {
  console.log('done')
  }
)*/

app.listen(port, function(){
    console.log(chalk.blue(`server running in port ${port}`))
})