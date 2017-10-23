define({
  rules: [
    {
      priority: 10,
      select: {
        type: "@pentaho/browse!my/package/BarVisualization",
        application: "pentaho-analyzer"
      },
      apply: {
        enabled: true,
        category: "bar",
        ordinal: 10
      }
    },

    {
      priority: 10,
      select: {
        type: "@pentaho/browse!my/package/BarVisualization",
        application: "pentaho-det"
      },
      apply: {
        enabled: false
      }
    }
  ]
});