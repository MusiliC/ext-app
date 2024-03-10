Ext.define("MyApp.view.summarygrouping.SummaryGrid", {
  extend: "Ext.grid.Panel",
  xtype: "summarygrid",
  reference: "summaryrid",
  features: [
    {
      ftype: "summary",
    },
  ],
  store: {
    model: "Summary",
    data: [
      {
        student: "Student 1",
        mark: 84,
      },
      {
        student: "Student 2",
        mark: 72,
      },
      {
        student: "Student 3",
        mark: 96,
      },
      {
        student: "Student 4",
        mark: 68,
      },
    ],
  },
  columns: [
    {
      dataIndex: "student",
      text: "Name",
      summaryType: "count",
      summaryRenderer: function (value, summaryData, dataIndex) {
        return Ext.String.format(
          "{0} student{1}",
          value,
          value !== 1 ? "s" : ""
        );
      },
    },
    {
      dataIndex: "mark",
      text: "Mark",
      summaryType: "average",
    },
  ],
});
