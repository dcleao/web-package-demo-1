define([
  "pentaho/module!_",
  "pentaho/visual/base/View",
  "pentaho/theme!_" // Apply any configuration annotated themes for this module, when loaded.
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
