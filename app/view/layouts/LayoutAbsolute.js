Ext.define("MyApp.view.layouts.LayoutAbsolute", {
    extend: "Ext.panel.Panel",
    // layout: 'panel',
    //layout: "column",
    layout: {
      type: 'table',
      columns: 3
    },
    xtype: "layoutabsolute", 
    //absolute
  //   items: [{
  //     title: 'Panel 1',
  //     x: 50,
  //     y: 50,
  //     html: 'Positioned at x:50, y:50',
  //     width: 500,
  //     height: 100
	// 		},{
  //     title: 'Panel 2',
  //     x: 100,
  //     y: 95,
  //     html: 'Positioned at x:100, y:95',
  //     width: 500,
  //     height: 100
  //  }]
  //column
//   items: [{
//     html : 'First Component',
//     columnWidth : 0.25
//  },{
//     html : 'Second Component',
//     columnWidth : 0.50
//  },{
//     html : 'Third Component' ,
//     columnWidth : 0.125
//  },{
//     html : 'Fourth Component',
//     columnWidth : 0.125
//  }]
 //table
 items : [{
  html : 'panel 1',
  height : 50,
  colspan :2
},{
  html : 'panel 2',
  height : 50
},{
  html : 'panel 3',
  height : 50
},{
  html : 'panel 4',
  height : 50
},{
  html : 'panel 5',
  height : 50
}]

  });
  