define([
  "pentaho/module!_",
  "pentaho/visual/base/Model",
  "pentaho/visual/role/Property",
], function(module, BaseModel, RoleProperty) {
  
  // module.theme undefined      pentaho/theme!_
  // module.config Object        "pentaho/config!_"
  // module.i18n MessageBundle   pentaho/i18n!_
  // module.ui IUIMeta
    // module.ui.theme
    // module.ui.config
    // module.ui.i18n
    // module.ui.ui throw

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
  .localize()
  .configure();
});
