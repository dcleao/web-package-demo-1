define([
  "pentaho/module!_",
  "pentaho/visual/base/Model",
  "pentaho/visual/role/Property",
  "pentaho/i18n!_",
], function(module, BaseModel, RoleProperty, bundle) {
  
  return BaseModel.extend({
    $type: {
      id: module.id,
      props: [
        {
          name: "series",
          base: RoleProperty,
          modes: [{dataType: "string"}]
        }
      ]
    }
  })
  .localize({$type: bundle.structured})
  .configure();
});
