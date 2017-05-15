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
// const Twitter = require('twitter')
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


const twit = new Twit({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token: ACCSESS_TOKEN_KEY,
  access_token_secret: ACCSESS_TOKEN_SECRET
})
/**
 * This function is made to get the twitter serch
 * @function
 * @param lat coordiantes
 * @param long cooridinates
 */
  const getTwits = (lat, long, rad=1000) => {
    const params = {
      q: '#nowPlaying+youtube',
      count: 6,
      result_type: 'recent'
    };
    if (lat !== undefined && long !== undefined) params.geocode = `${lat},${long},400km`
    return twit.get('search/tweets', params)
  }

  /*twitter.stream('statuses/filter', {track: 'nowplaying', location}, (stream) => {
    stream.on('data', (data) => {
      observer.next(data)
    })
    stream.on('error', (err) => {
      console.log(chalk.red('pass here'))
    })
  })*/
  /*var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
  const stream = twit.stream('statuses/filter', { track: '#Nowplaying+#nowplaying+youtube.com/watch', language: 'es', locations: cali })
  stream.on('tweet', function (tweet) {
    observer.next(tweet)
  })*/
/**
 * @function This function is made to post new twitter
 * @param message
 * @param url
 */
const postTwit = (message, url) => {
  return twit.post('statuses/update', {status: `#nowPlaying ${message} ${url}`});
}

module.exports = {
  getTwits,
  postTwit
};



