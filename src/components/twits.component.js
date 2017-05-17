
export default {
  bindings: {
      twits: '<'
  },
  template: `
    <section class="section-wrapper">
      <article class="twits-wrapper" ng-repeat="twit in $ctrl.twits" emit-when="{event: 'allRendered', condition: $last}">
        <header class="video-title">
          <h3>{{twit.youtubeTitle}}</h3>
        </header>
        <div class="video-wrapper" id="{{twit.tweet.id}}-video-wrapper">
          <video id="video-{{twit.tweet.id}}" controls class="video-js vjs-default-skin"></video>
        </div>
        <twitter-widget class="twit-wrapper" twitter-widget-id="twit.tweet.id_str" twitter-widget-options="{cards: 'hidden', 'light': 'dark' }"></twitter-widget>
      </article>
    </section>
  `,
  controller: 'twitsController'
}


//https://www.youtube.com/watch?v=eEHss0cNy9w

// data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=eEHss0cNy9w"}], "youtube": { "iv_load_policy": 1 } }'