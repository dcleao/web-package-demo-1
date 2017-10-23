define([
  "module",
  "pentaho/visual/base/Visualization",
  "./BarModel",
  "pentaho/css!./theme/BarVisualization"
], function(module, BaseViz, BarModel) {

  return BaseViz.extend({
    $type: {
      id: module.id,

      defaultViewTypeId: "./BarView",

      props: {
        model: {
          valueType: BarModel
        }
      }
    }
  });
});