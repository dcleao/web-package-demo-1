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
      modelTypeId: "./BarModel",

      /* base */
      props: {
        model: {
          valueType: BarModel
        },
        view: {
          valueType: "base.View"
        }
      }
    }
  });
  /*
    {
      _: "BarViz",
      model: {
        //_: "BarModel",
        lineWidth: 0
      },
      view: {
        _: "BarView"
        // model: x
      }
    }
   */
});
