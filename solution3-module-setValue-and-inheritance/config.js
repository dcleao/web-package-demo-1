define({
  rules: [
    // Viz browsing rules
    {
      select: {
        module: "@my/bar/Viz.browse",
        application: "pentaho-analyzer"
      },
      apply: {
        isBrowsable: true,
        category:    "bar",
        ordinal:     10
      }
    },
    {
      select: {
        module: "@my/bar/Viz.browse",
        application: "pentaho-det"
      },
      apply: {
        isBrowsable: false
      }
    },

    // Model logic
    {
      select: {
        module: "@my/bar/Model"
      },
      apply: {
        props: {
          "series": {isRequired: true}
        }
      }
    },
    {
      select: {
        module: "@my/bar/Model",
        application: "pentaho-analyzer"
      },
      apply: {
        application: {
          keepLevelOnDrilldown: false
        }
      }
    },

    // View configuration
    {
      select: {
        module: "@my/bar/View"
      },
      apply: {
        extension: {
          "bar_fillStyle": "red"
        }
      }
    }
  ]
});
