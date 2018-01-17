define([
  "pentaho/module!?i18n&theme",
  "pentaho/visual/base/View",
  "./Model"
], function(module, BaseView, Model) {

  return BaseView.extend({
    $type: {
      module: module,
      props: {
        model: {valueType: Model}
      }
    },

    _updateAll: function() {
      this.domContainer.innerText = "Hello World";
    }
  }).finish();
});
