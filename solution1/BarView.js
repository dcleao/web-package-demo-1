define([
  "module",
  "pentaho/visual/base/View",
  "./BarModel"
], function(module, BaseView, BarModel) {

  return BaseView.extend({
    $type: {
      id: module.id,
      props: {
        model: {valueType: BarModel}
      }
    },

    _updateAll: function() {
      this.domContainer.innerText = "Hello World";
    }
  })
  .implement({$type: bundle.structured});
});