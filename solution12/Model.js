define([
  "pentaho/module!_",
  "pentaho/visual/base/Model",
  "pentaho/visual/role/Property",
], function(module, BaseModel, RoleProperty) {
  
  /*
    "pentaho/visual/DefaultViewAnnotation"
  
    DefaultViewAnnotation.of(annotated, id) -> null 
    DefaultViewAnnotation.loadASync()
  */

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
  .configure();
});
