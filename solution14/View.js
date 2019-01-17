define([
  "pentaho/module!_",
  "pentaho/visual/base/View"
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
