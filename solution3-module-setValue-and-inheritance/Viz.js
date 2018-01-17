define([
  "pentaho/module!",
  "pentaho/visual/base/Viz",
  "./Model",
  "./View"
], function(module, BaseViz, Model, View) {

  return module.setValue(BaseViz.extend({
    $type: {
      props: {
        model: {valueType: Model},
        view:  {valueType: View}
      }
    }
  }));
});
