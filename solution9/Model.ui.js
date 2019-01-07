define({
  name: "foo",
  description: "bar",
  category: "basic",
  ordinal: 10
});

define(function() {
  return {
    name: "foo",
    description: "bar",
    category: "basic",
    ordinal: 10
  };
});

define([
  "lodash",
  "pentaho/i18n!_"
], function(_, bundle) {
  return _.merge({
    name: "foo",
    description: "bar",
    category: "basic",
    ordinal: 10
  }, bundle.structured);
});

define([
  "lodash",
  "pentaho/i18n!_",
  "pentaho/theme!_"
], function(_, bundle) {
  return _.merge({
    name: "foo",
    description: "bar",
    category: "basic",
    ordinal: 10
  }, bundle.structured);
});

define([
  "pentaho/module!_",
  "lodash"
], function(module, _) {
  return _.merge({
    name: "foo",
    description: "bar",
    category: "basic",
    ordinal: 10,
    view: "./View"
  }, module.i18n.structured, module.config);
});

define([
  "pentaho/module!_",
  "pentaho/module/UIMeta",
  "pentaho/i18n!_",
  "pentaho/theme!_"
], function(module, UIMeta, bundle) {

  return UIMeta.fromModule(module, {category: "bar"}, bundle.structured);
});

interface IModuleMeta {
  // ...
  loadUIAsync() : IPromise.<IUIMeta>
  get ui() : ?IUIMeta
  get isUILoaded() : boolean
}

// module.ui

interface IUIMeta {
  get isBrowsable() : boolean

  get label()       : string
  get description() : string
  
  get category()   : string
  get ordinal()    : number
  get isAdvanced() : boolean
  
  get helpUrl()    : string

  get styleClass() : string
}
