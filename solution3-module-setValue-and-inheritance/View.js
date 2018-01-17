define([
  "pentaho/module!",
  "pentaho/visual/base/View",
  "./Model"
], function(module, BaseView, Model) {

  return module.setValue(BaseView.extend({
    $type: {
      props: {
        model: {valueType: Model}
      }
    },

    _updateAll: function() {
      this.domContainer.innerText = "Hello World";
    }
  }));
});
