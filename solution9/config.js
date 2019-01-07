define([
  "module",
  "pentaho/module/util"
], function(module, moduleUtil) {

  var resolveId = function(moduleId) {
    return moduleUtil.resolveModuleId(moduleId, module.id);
  };

  return {
    rules: [
      // Model - ui
      {
        select: {
          module: "./Model.ui",
          application: "pentaho-analyzer"
        },
        apply: {
          isBrowsable: true,
          category: "bar",
          ordinal: 10
        }
      },

      // Model - ui - themes
      {
        select: {
          module: "pentaho/theme!./Model.ui"
          // theme: "ruby"
        },
        apply: {
          main: resolveId("./themes/ruby/Model.ui")
        }
      },

      // Model - configuration
      {
        select: {
          module: "./Model",
          application: "pentaho-analyzer"
        },
        apply: {
          props: {
            "series": {isRequired: true}
          },
          application: {
            keepLevelOnDrilldown: false
          }
        }
      },

      // View - themes
      {
        select: {
          module: "pentaho/theme!./View"
          // theme: "ruby"
        },
        apply: {
          main: resolveId("./themes/ruby/View")
        }
      },

      // View - configuration
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
