define({
  rules: [
    // Model.info configuration
    {
      select: {
        module: "./Model.info",
        application: "@hitachivantara/pentaho-det"
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
        application: "@hitachivantara/pentaho-analyzer"
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
