define([
  "pentaho/module!",
  "pentaho/visual/base/Model"
], function(module, BaseModel) {

  return module.setValue(BaseModel.extend({
    $type: {
      props: [
        {
          name: "series",
          base: "pentaho/visual/role/Property",
          levels: ["ordinal"]
        }
      ]
    }
  }));
});
