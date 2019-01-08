define([
  "pentaho/module!_",
  "pentaho/visual/base/View",
  "pentaho/theme!_" // Automatically apply any themes configuration annotated themes for this module.
], function(module, BaseView) {

  return BaseView.extend({
    $type: {
      id: module.id
    },

    _updateAll: function() {
      this.domContainer.innerText = this.$type.messages.helloText;
    }
  })
  .configure();
});
