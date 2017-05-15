# Get post with the #nowPlaying tag
This is just a test for my angular
## Eviromental Variables
This variables must be created in order to connect to the **TWITTER's API**  
* `PORT` if not set 8080 port will be used as default  
* `CONSUMER_KEY` this env variable must be set if not project wont't work  
* `CONSUMER_SECRET` this env variable must be set if not project wont't work  
* `ACCSESS_TOKEN_KEY` this env variable must be set if not project wont't work  
* `ACCSESS_TOKEN_SECRET` this env variable must be set if not project wont't work  
## RUN COMMANDS  
Run **npm run docs** to create documentation <br>
Run **npm run build** to build production<br>
Run**npm start** to build and run dev server<br>
Run **node server.js** to server<br>
## Time TRACK 
* **SATURDAY** 4 hours setting nodejs to get twitter stream
* **SATURDAY** 2 hours setting webpack, angular and ngtweet and connecting to the strem (had a probel making ngTweet work for and error injecting the dependency)
* **SATURDAY** 4 hours refactor the nodejs connection to twitter stream using rxjs and socket.io there is no way I can geolocate per user I can only geolocate all.
* **SUNDAY** 2 hours setting styles and looking into twitter cards embedded cards options
* **SUNDAY** 1 hour searching why geolocate is not working.
* **SUNDAY** 3 hours trying to solve issues with videojs sync an external source with angular
* **MONDAY** 1 hour fix gelocation and reload after post
## TOOLING
* Choose Angular 1.6 because it is a framework I've used in the past and I feel confortable working with it
* ngTweet directive I found that manage all the twitter styles and simplify things
* Webpack as bundler I feel confortable using this and I already had a project made with andgular 1 and webpack 
* Less because it was already set up I just used it
* videojs I know his functionality and easy to use. The problems I am having are more with sync.
* babel to traspile

