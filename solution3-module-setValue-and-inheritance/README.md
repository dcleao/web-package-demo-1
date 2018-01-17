# Sample

1. Renamed modules returning types to have an upper case file name,
   in the path to achieving equality between file name, module name and type names.

2. Using npm scoped package names: `@my/bar`.

3. Using `modules` as a supported keyword in `package.json`, 
   plus both to declare type and instance modules.
   Disambiguation is based on either explicitly specifying the `kind` attribute or
   on the presence of the `base` or `type` attributes.
   When the API is asked for a module which is not registered it would assume it to 
   be of kind `instance` of type `Any` (as this is the simplest kind)?

4. `Viz.browse` instance contains information pertaining to UI "browsability" of `Viz`.
   * `Viz` concentrates on:
     * establishing the bindings to the required base model and view types
     * making these dependencies visible to AMD at static time (`r.js`)
     * imports the `Viz.browse` information as well.
   * `Viz.browse` is now declared simultaneously fulfilling the need to declare that
     it has i18n and themes, and also that it is an instance module of a certain value `type`.
     The value type along with the module id reveal the id of the module for which
     it provides browsing information and accomplishes registration automatically.
     Only a single (or the latest) browse module is registerable, which is what we want.

5. `module.setValue(value)` performs all automatic finalization tasks of a module,
   like applying identity, browsing, localization, configuration information to its value
   (loading the theme of the module is already done, when requesting the module).
   
   What actually gets done in `setValue` depends on the declared `base` or `type` of the module.
   The base class `TypeModule` would be extended by particular base type modules.
   The new class would be used for itself and that of any descendant type modules or 
   instance modules of such types.
   Thus, specifying `type` or `base` in the configuration would be key
   for the correct Module class to be used
   (example overridable hooks: 
    `TypeModule#_applyLocalization(value)`,
    `TypeModule#_applyConfiguration(value)`,
    `TypeModule._applyBrowsingInfo(value)`).
   
   * The order of application of browsing information, localization and configuration is relevant
     and is guaranteed by `module.setValue`.
   * Alternative names: 
      * `module.define(value)`
      * `module.export(value)`
   * Also normalizes the syntax of browse modules (instead of `module.createUIAttributes`).
   
6. The `Instance.localize` method would be used internally by the `TypeApiTypeModule` overrides.
   The method instructs the type that it is being localized.
   This allows property setters to block certain changes when made from i18n files
   (see use in `Model`).
   * Sugar could be developed to make it possible to call `localize` 
     as `.localize(i18n)`, instead of as `.localize(i18n.structured)`.

7. The `Instance.configure` method would be used internally by the `TypeApiTypeModule` overrides.
   The method instructs the type that it is being configured.
   This allows property setters to block certain changes when made from configuration.
   (see use in `Model`).

8. The `Type#ui` property would be used internally by the `TypeApiTypeModule` overrides.
   It would be the means by to apply all of the module's browsing information
   in one shot (see use in `Viz`).
   Note that not all of the browsing information is _localized_ information, 
   so `Instance.localize` would not be appropriate for receiving this information.
   
9. The `Type#id` property would be applied internally by the `TypeApiTypeModule` overrides.
   Is there any real problem if this is applied on `implement` and not `extend`??

10. The following modules could still be used explicitly used, if necessary, 
   by some external party:
   `pentaho/module!`, `pentaho/browse!`, `pentaho/i18n!`, `pentaho/config!`, `pentaho/theme!`. 

11. Where should the `Type#application` attribute be specified?
    On the model type, the view type, the viz type or in all of them?
    Similarly, the `Model#application` instance property is being filled in the 
    model instance by the container application. 
    
12. Keys in localization files now start with a `$type` to define the scope of what's 
    automatically applied to the type (and what's simply there for using in messages, etc.).

13. The `pentaho/module!` plugin should make the underlying `.browse` file visible for `r.js`,
    if any.
