define([
  "pentaho/module!?i18n&theme",
  "pentaho/module/BrowsingInfo"
], function(module, BrowsingInfo) {

  return BrowsingInfo.fromModule(module, {
    category: "bar"
  });
});
