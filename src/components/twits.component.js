
export default {
  bindings: {
      twits: '<'
  },
  template: `
    <section class="twits-wrapper" ng-repeat="twit in $ctrl.twits">
      <div id="{{twit.id}}-video-wrapper">
        <video data-setup='{ "techOrder": ["youtube"]' controls class="video-js vjs-default-skin" vjs-video></video>
      </div>
      <twitter-widget twitter-widget-id="twit.id_str" twitter-widget-options="{'widget_type=': 'video', cards: 'sumary', 'align':'center', 'light': 'dark' }"></twitter-widget>
    </section>
  `,
  controller: 'twitsController'
}


//https://www.youtube.com/watch?v=eEHss0cNy9w

// data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=eEHss0cNy9w"}], "youtube": { "iv_load_policy": 1 } }'