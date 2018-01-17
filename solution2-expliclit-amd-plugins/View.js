define([
  "pentaho/module!",
  "pentaho/config!",
  "pentaho/visual/base/View",
  "./Model"
], function(module, config, BaseView, Model) {

  return BaseView.extend({
    $type: {
      id: module.id,
      props: {
        model: {valueType: Model}
      }
    },

    _updateAll: function() {
      this.domContainer.innerText = "Hello World";
    }
  })
  .configure({$type: config});
});
