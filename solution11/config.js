define({
  rules: [
    // Model.info configuration
    {
      select: {
        module: "./Model.info",
        application: "@pentaho/det"
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
        module: "./Model.info"
      },
      apply: {
        "::annotations": {
          "@pentaho/theme/Themed": {
            // Defaults to first in themes object.
            // "default": "crystal",

            // Add crystal and saphire themes:
            "themes": {"crystal": true, "saphire": true}
          }
        }
      }
    },

    // Model configuration
    {
      select: {
        module: "./Model",
        application: "@pentaho/analyzer"
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
