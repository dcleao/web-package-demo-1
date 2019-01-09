define({
  rules: [
    // Model.info configuration
    {
      select: {
        module: "./Model.info",
        application: "pentaho/det"
      },
      apply: {
        isBrowsable: true,
        category: "bar",
        ordinal: 10
      }
    },

    // Model.info themes configuration
    // For adding new themes or changing the default theme.
    {
      select: {
        // Targeting a specific annotation of a specific module, 
        // through configuration.
        module: "./Model.info",
        annotation: "pentaho/theme/Themed"
      },
      apply: {
        // Defaults to first in themes object.
        // "default": "crystal",

        // Add crystal and saphire themes:
        "themes": {"crystal": true, "saphire": true}
      }
    },

    // Model configuration
    {
      select: {
        module: "./Model",
        application: "pentaho/analyzer"
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
});
