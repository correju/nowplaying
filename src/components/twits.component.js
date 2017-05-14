
export default {
  bindings: {
      //data: '='
  },
  template: `
    <section class="twits-wrapper" ng-repeat="data in $ctrl.data">
      <twitter-widget twitter-widget-id="data.id_str" twitter-widget-options="{'widget_type=': 'video', cards: 'sumary', 'align':'center', 'light': 'dark' }"></twitter-widget>
    </section>
  `,
  controller: 'twitsController'
}
