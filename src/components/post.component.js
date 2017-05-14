export default {
  bindings: {
      //data: '='
  },
  template: `
    <header><h1>#nowPlaying in: Colombia</h1></header>
    <section class="post-section">
      <form>
        <fieldset class="fieldset-container">
            <div class="form-group  col-xs-5">
              <input placeholder="Video Url" class="form-control" id="video-url" ng-model="$ctrl.url" type="text" />
            </div>
            <div class="form-group  col-xs-5">
              <input class="form-control" placeholder="Message" id="message" ng-model="$ctrl.message" type="text" />
            </div>
            <div class="form-group  col-xs-2">
              <button class="btn btn-primary form-group" ng-click="$ctrl.post()">
                <i class="fa fa-twitter"></i>
                Tweet to #nowPlaying
              </button>
            </div>

        </fieldset>
      </form>
    </section>
  `,
  controller: 'postController'
}
