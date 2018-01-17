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
   `Viz` concentrates on:
    * establishing the bindings to the required base model and view types
    * making these dependencies visible to AMD at static time (`r.js`)
    * imports the `Viz.browse` information as well.

5. The `Instance.localize` method instructs the type that it is being localized.
   This allows property setters to block certain changes when made from i18n files
   (see use in `Model`).
   * Sugar could be developed to make it possible to call `localize` 
     as `.localize(i18n)`, instead of as `.localize(i18n.structured)`.

6. The `Instance.configure` method instructs the type that it is being configured.
   This allows property setters to block certain changes when made from configuration.
   (see use in `Model`).

7. The `Type#ui` property would be the means to receive all of the module's browsing information
   in one shot (see use in `Viz`).
   Note that not all of the browsing information is _localized_ information, 
   so `Instance.localize` would not be appropriate for receiving this information.

8. Opted to force the modules to explicitly require every cross-cutting resource type using a 
   corresponding AMD plugin 
   (`pentaho/module!`, `pentaho/browse!`, `pentaho/i18n!`, `pentaho/config!`, `pentaho/theme!`).
   
   Alternatively, the `ModuleInfo` object, which is returned by `pentaho/module!`, 
   could expose these as properties (e.g. `module.config`).
   Note that any of these pieces of information is, generally, only available asynchronous. 
   As such, we'd need to either
   a) register the module as having each of those pieces information and 
   the AMD plugin would make sure to load these automatically, or 
   b) specify the desired loaded parts when calling the AMD plugin 
   (e.g. `pentaho/module!config&i18n&theme`).
   The existence of the `browse` part always needs to be registered in `package.json`,
   as this information is necessary even if the main module is not loaded.
   
   On another aspect, the `i18n` and `theme` plugins when given no arguments load 
   resource modules from predefined locations.
   
   This direction has the advantage of making every dependency very clear at the top of a module.
   The disadvantage is the amount of boiler plate that can develop. 

9. The order of application of browsing information, localization and configuration is relevant
   and is being respected in every use.
   However, it must be the user to take care of satisfying the 
   documented, expected semantics, every time.

10. Where should the `Type#application` attribute be specified?
    On the model type, the view type, the viz type or in all of them?
    Similarly, the `Model#application` instance property is being filled in the 
    model instance by the container application. 

11. The `pentaho/browse!` plugin should make the underlying .browse file visible for `r.js`.
    Alternatively, this plugin could be replaced by explicitly loading the `Viz.browse.js`
    file...
