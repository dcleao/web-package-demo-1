define({
  rules: [
    {
      priority: 10,
      select: {
        type: "@pentaho/browse!my/package/SpecialBarViz",
        application: "pentaho-analyzer"
      },
      apply: {
        isBrowsable: true,
        category: "bar",
        ordinal: 10,
      }
    },

    {
      priority: 10,
      select: {
        type: "@pentaho/browse!my/package/SpecialBarViz",
        application: "pentaho-det"
      },
      apply: {
        isBrowsable: false
      }
    }
  ]
});