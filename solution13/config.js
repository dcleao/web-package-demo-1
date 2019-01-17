define([
  "module",
  "pentaho/module/util"
], function(module, moduleUtil) {

  function resolveId(moduleId) {
    return moduleUtil.resolveModuleId(moduleId, module.id);
  }

  return {
    rules: [
      // Model - info
      // analyzer - menu
      {
        select: {
          module: "./Model.info",
          application: "pentaho/analyzer"
        },
        apply: {
          isBrowsable: true,
          category: "bar",
          ordinal: 10
        }
      },

      // Model - themes
      // analyzer - ruby theme
      {
        select: {
          module: "./Model",
          annotation: "pentaho/theme/Themed",
          application: "pentaho/analyzer",
          theme: "ruby"
        },
        apply: {
          main: resolveId("./themes/analyzer-ruby/Model")
        }
      },

      // Model - configuration
      // analyzer - force use series visual role
      {
        select: {
          module: "./Model",
          application: "pentaho/analyzer"
        },
        apply: {
          props: {
            "series": {isRequired: true}
          }
        }
      },

      // Model - application options
      // Remove $type.application
      // analyzer - options
      {
        select: {
          module: "./Model",
          annotation: "pentaho/analyzer/visual/VisualizationOptions",
          application: "pentaho/analyzer"
        },
        apply: {
          keepLevelOnDrilldown: false
        }
      },

      // View - themes
      // analyzer - ruby theme
      {
        select: {
          module: "./View",
          annotation: "pentaho/theme/Themed",
          application: "pentaho/analyzer",
          theme: "ruby"
        },
        apply: {
          main: resolveId("./themes/analyzer-ruby/View")
        }
      },

      // View - configuration
      // general configuration
      {
        select: {
          module: "./View"
        },
        apply: {
          extension: {
            "bar_fillStyle": "red"
          }
        }
      }
    ]
  };
});
