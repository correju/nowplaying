
export default {
  bindings: {
      twits: '<'
  },
  template: `
    <section class="twits-wrapper" ng-repeat="twit in $ctrl.twits">
      <twitter-widget twitter-widget-id="twit.id_str" twitter-widget-options="{'widget_type=': 'video', cards: 'sumary', 'align':'center', 'light': 'dark' }"></twitter-widget>
    </section>
  `,
  controller: 'twitsController'
}
