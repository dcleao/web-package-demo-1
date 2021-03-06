define([
  "module",
  "pentaho/visual/base/Model",
  "pentaho/i18n!./i18n/BarModel"
], function(module, BaseModel, bundle) {

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
  .implement({$type: bundle.structured});
});