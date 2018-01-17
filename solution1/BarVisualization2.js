define([
  "module",
  "pentaho/visual/base/Visualization",
  "pentaho/type/config!",
  "pentaho/css!./theme/BarVisualization"
], function(module, BaseVisualization, config) {

  /**
   * Responsibilities.
   * - on change auto-bind: view.model = model.
   * - custom defaults for cases like stacked/Grouped ?
   *   - forced specs?
   *   - complex.setDefault/Forced()?
   * - no events / boundary properties.
   * - for 3.0.
   */
  return BaseVisualization.extend({
    $type: {
      id: module.id,
      label: "",
      description: "",
      styleClass: "",
      helpUrl: "",

      // Restriction View.model : ModelType
      viewTypeId:  "./BarView", // Default view  type of new vizs
      modelTypeId: "./BarModel" // Default model type of new vizs (should be blocked from config?)
    }
  })
  .configure({$type: config});

  // BarVisualization.createAsync({
  //   view: {
  //    _: ""
  //   },
  //   model: {
  //     _: "barLine"
  //   }
  // });

  // BarVisualization.create({}); // throws if not loaded
});
