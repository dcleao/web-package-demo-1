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
   * `Viz.browse` is now declared in `package.json` as an instance module of a certain value `type`.
     The value type along with the module id reveal the id of the module for which
     it provides browsing information and accomplishes registration automatically.
     Only a single (or the latest) browse module is registerable, which is what we want.
   * `Viz.browse` uses the `pentaho.module.BrowsingInfo.fromModule(module, spec)` to be constructed...

5. Type API types now receive the `module` directly and immediately applies identity and browsing information.
   Later, the finish method applies localization and configuration information to its value.
   (loading the theme of the module is already done, when requesting the module).
   
   * The order of application of browsing information, localization and configuration is relevant
     and is guaranteed by the Type API or the `BrowsingInfo.fromModule` methods.
   
6. The `Type.localize` method would be used internally by `finish` to instruct the type that it is being localized.
   This allows property setters to block certain changes when made from i18n files
   (see use in `Model`).
   * Sugar could be developed to make it possible to call `localize` 
     as `.localize(i18n)`, instead of as `.localize(i18n.structured)`.

7. The `Type.configure` method would be used internally by `finish` to instruct the type that it is being configured.
   This allows property setters to block certain changes when made from configuration.
   (see use in `Model`).

8. The `Type#ui` property would be used internally by `finish` as the means to apply all of the 
   module's browsing information in one shot (see use in `Viz`).
   Note that not all of the browsing information is _localized_ information, 
   so `Instance.localize` would not be appropriate for receiving this information.
   
9. The following modules could still be used explicitly used, if necessary, 
   by some external party:
   `pentaho/module!`, `pentaho/browse!`, `pentaho/i18n!`, `pentaho/config!`, `pentaho/theme!`. 

10. Where should the `Type#application` attribute be specified?
    On the model type, the view type, the viz type or in all of them?
    Similarly, the `Model#application` instance property is being filled in the 
    model instance by the container application. 
    
11. Keys in localization files now start with a `$type` to define the scope of what's 
    automatically applied to the type (and what's simply there for using in messages, etc.).
    
13. The `pentaho/module!` plugin should make the underlying `.browse` file visible for `r.js`,
    if any.
