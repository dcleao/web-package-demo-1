define([
  // ?
  // "pentaho/module!?i18n&config",
  "pentaho/module!",
  "pentaho/i18n!",
  "pentaho/config!",
  "pentaho/visual/base/Model"
], function(module, i18n, config, BaseModel) {

  return BaseModel.extend({
    $type: {
      id: module.id,
      props: [
        {
          name: "series",
          base: "pentaho/visual/role/Property",
          levels: ["ordinal"]
        }
      ]
    }
  })
  .localize({$type: i18n.structured})
  .configure({$type: config});
});
