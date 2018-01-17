define([
  "pentaho/module!",
  "pentaho/visual/base/Viz",
  "./Model",
  "./View"
], function(module, BaseViz, Model, View) {

  return BaseViz.extend({
    $type: {
      module: module,
      props: {
        model: {valueType: Model},
        view: {valueType: View}
      }
    }
  }).finish();
});
