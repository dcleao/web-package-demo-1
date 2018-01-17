define([
  "pentaho/module!",
  "pentaho/i18n!",
  "pentaho/config!",
  "pentaho/theme!"
], function(module, i18n, config) {

  var defaults = {
    category: "bar"
  };

  return module.createUIAttributes(defaults, i18n.structured, config);
});
