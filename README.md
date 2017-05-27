# Get post with the #nowPlaying tag
## Eviromental Variables
This Environment variables must be created in order to connect to the **TWITTER's API**
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
## TOOLING
* Choose Angular 1.6 because it is a framework I've used in the past and I feel confortable working with it
* ngTweet directive I found that manage all the twitter styles and simplify things
* Webpack as bundler I feel confortable using this and I already had a project made with andgular 1 and webpack
* Less because it was already set up I just used it
* videojs I know his functionality and easy to use. The problems I am having are more with sync.
* babel to traspile
## IDEAS TO DO IN THE FUTURE
* Grab the tweets feed and create a playlist
* Player will use youtube as feed to play videos
* User can see the tweet automatically play the song
* User can change to next song

