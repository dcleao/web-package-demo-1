define([
  "module",
  "pentaho/visual/base/Visualization",
  "./SpecialBarModel",
], function(module, BaseViz, SpecialBarModel) {

  return BaseViz.extend({
    $type: {
      id: module.id,

      defaultViewTypeId: "./SpecialBarView",

      props: {
        model: {
          valueType: SpecialBarModel
        }
      }
    }
  });
});