define([
  "pentaho/module!_",
  "pentaho/visual/base/View",
  "pentaho/i18n!_",
  "pentaho/theme!_"
], function(module, BaseView, bundle) {

  return BaseView.extend({
    $type: {
      id: module.id
    },

    _updateAll: function() {
      this.domContainer.innerText = this.$type.messages.helloText;
    }
  })
  .localize({$type: bundle.structured})
  .configure();
});
