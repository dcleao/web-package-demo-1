define([
  "pentaho/module!",
  "pentaho/browse!",
  "pentaho/config!",
  "pentaho/visual/base/Viz",
  "./Model",
  "./View"
], function(module, browse, config, BaseViz, Model, View) {

  return BaseViz.extend({
    $type: {
      id: module.id,
      ui: browse,
      props: {
        model: {valueType: Model},
        view:  {valueType: View}
      }
    }
  })
  .configure({$type: config});
});
