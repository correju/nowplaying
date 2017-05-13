/**
 * @file this file constains the module that connects to twitter
 * @module returns the connection to twitter
 */
const chalk = require('chalk')
const {Observable} = require('rxjs')
/**
 * twitter module
 * @const
 */
const Twitter = require('twitter')
const Twit = require('twit')
/*
 * Constant of the TWITTER api
 * @param CONSUMER_KEY {hash}
 */
const CONSUMER_KEY = process.env.CONSUMER_KEY
/**
 * Constant of the TWITTER api
 * @param CONSUMER_SECRET {hash}
 */
const CONSUMER_SECRET = process.env.CONSUMER_SECRET
/**
 * Constant of the TWITTER api
 * @param ACCSESS_TOKEN_KEY {hash}
 */
const ACCSESS_TOKEN_KEY = process.env.ACCSESS_TOKEN_KEY
/**
 * Constant of the TWITTER api
 * @param ACCSESS_TOKEN_SECRET {hash}
 */
const ACCSESS_TOKEN_SECRET = process.env.ACCSESS_TOKEN_SECRET
/**
 * receives all the params to connect to Twitter's api
 * @instance Twitter
 * @param CONSUMER_KEY,
 * @param CONSUMER_SECRET,
 * @param ACCSESS_TOKEN_KEY,
 * @param ACCSESS_TOKEN_SECRET
 */
/*const twitter = new Twitter({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCSESS_TOKEN_KEY,
  access_token_secret: ACCSESS_TOKEN_SECRET
})*/

const twit = new Twit({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token: ACCSESS_TOKEN_KEY,
  access_token_secret: ACCSESS_TOKEN_SECRET
})

const getTwitsCallback = function (observer) {
  const cali = ['-76.590503','3.284575','-76.460825','3.505554']
  /*twitter.stream('statuses/filter', {track: 'nowplaying', location}, (stream) => {
    stream.on('data', (data) => {
      observer.next(data)
    })
    stream.on('error', (err) => {
      console.log(chalk.red('pass here'))
    })
  })*/
  var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
  const stream = twit.stream('statuses/filter', { track: '#nowplaying', language: 'es', locations: cali })
  stream.on('tweet', function (tweet) {
    observer.next(tweet)
  })
}
const getTwits$ = new Observable(getTwitsCallback)

module.exports = {
  getTwits$
};



