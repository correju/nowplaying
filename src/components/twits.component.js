
export default {
  bindings: {
      twits: '<'
  },
  template: `
    <div class="section-wrapper">
      <section class="twits-wrapper" ng-repeat="twit in $ctrl.twits" emit-when="{event: 'allRendered', condition: $last}">
        <div class="video-wrapper" id="{{twit.id}}-video-wrapper">
          <video id="video-{{twit.id}}" controls class="video-js vjs-default-skin"></video>
        </div>
        <twitter-widget class="twit-wrapper" twitter-widget-id="twit.id_str" twitter-widget-options="{cards: 'hidden', 'light': 'dark' }"></twitter-widget>
      </section>
    </div>
  `,
  controller: 'twitsController'
}


//https://www.youtube.com/watch?v=eEHss0cNy9w

// data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=eEHss0cNy9w"}], "youtube": { "iv_load_policy": 1 } }'