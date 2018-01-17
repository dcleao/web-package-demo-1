define([
  "pentaho/module!?i18n",
  "pentaho/visual/base/Model"
], function(module, BaseModel) {

  // module comes with .ui, .i18n and .config, if any.
  // themes, if defined, are loaded too by know.

  return BaseModel.extend({
    $type: {
      // Specify module directly.
      // Type is anchored to a source module.
      module: module,
      props: [
        {
          name: "series",
          base: "pentaho/visual/role/Property",
          levels: ["ordinal"]
        }
      ]
    }
  })
  .finish();
  // instructs type to apply localization from .i18n.structured.$type, and lastly configuration.
});
