define({
  rules: [
    // Model.info configuration
    {
      select: {
        module: "./Model.info",
        application: "hitachivantara-pentaho-analyzer"
      },
      apply: {
        isBrowsable: true,
        category: "bar",
        ordinal: 10
      }
    },

    // Model.info themes configuration
    {
      select: {
        module: "./Model.info",
        theme: "crystal"
      },
      apply: {
        "::annotations": {
          "@hitachivantara/pentaho/theme/Theme": {
            main: "./themes/crystal/Model.info"
          }
        }
      }
    },

    // Model configuration
    {
      select: {
        module: "./Model",
        application: "hitachivantara-pentaho-analyzer"
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
        module: "./View",
        theme: "crystal"
      },
      apply: {
        "::annotations": {
          "@hitachivantara/pentaho/theme/Theme": {
            main: "./themes/crystal/View"
          }
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
