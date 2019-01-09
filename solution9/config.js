define({
  rules: [
    // Model - info
    {
      select: {
        module: "./Model.info",
        application: "pentaho-analyzer"
      },
      apply: {
        isBrowsable: true,
        category: "bar",
        ordinal: 10
      }
    },

    // Model - info - themes
    {
      select: {
        module: "pentaho/theme!./Model.info",
        theme: "crystal"
      },
      apply: {
        main: "./themes/crystal/Model.info"
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
        module: "pentaho/theme!./View",
        theme: "crystal"
      },
      apply: {
        main: "./themes/crystal/View"
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
