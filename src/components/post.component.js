export default {
  bindings: {
      //data: '='
  },
  template: `
    <header><h1>#nowPlaying in: {{$ctrl.place}}</h1></header>
    <section class="post-section">
      <form>
        <fieldset class="fieldset-container">
          <div class="flex-wrapper">
              <div class="field-wrapper">
                <input placeholder="Video Url" class="form-control" id="video-url" ng-model="$ctrl.url" type="text" />
              </div>
              <div class="field-wrapper">
                <input placeholder="Message" id="message" class="form-control" ng-model="$ctrl.message" type="text" />
              </div>
              <div class="field-wrapper">
                <button class="btn btn-primary form-group" ng-click="$ctrl.post()">
                  <i class="fa fa-twitter"></i>
                  Tweet to #nowPlaying
                </button>
              </div>
            </div>
        </fieldset>
      </form>
    </section>
  `,
  controller: 'postController'
}
