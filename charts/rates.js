const data = [{
    name: 's1',
    low: 0,
    high: 1
  }, {
    name: 's2',
    low: 0,
    high: 2
  },  {
    name: 's3',
    low: 0,
    high: 3
  }, {
    name: "s4",
    low: 0,
    high: 4
  }, {
    name: "s5",
    low: 0,
    high: 5
  }, {
    name: "s6",
    low: 0,
    high: 6
  }, {
    name: "s7",
    low:0,
    high: 7
  }, {
    name:"s8",
    low: 0,
    high: 8
  }, {
    name: "s9",
    low: 0,
    high: 9
  },  {
    name:"s10",
    low: 0,
    high: 10
  },  {
    name:'',
  }, {
    name:"f(0,1)",
    low: 0,
    high: 1
  } ,  {
    name:"f(1,2)",
    low: 1,
    high: 2
  } ,  {
    name:"f(2,3)",
    low: 2,
    high: 3
  } ,  {
    name:"f(3,4)",
    low: 3,
    high: 4
  } ,  {
    name:"f(4,5)",
    low: 4,
    high: 5
  } ,  {
    name:"f(5,6)",
    low: 5,
    high: 6
  } ,  {
    name:"f(6,7)",
    low: 6,
    high: 7
  } ,  {
    name:"f(7,8)",
    low: 7,
    high: 8
  } ,  {
    name:"f(8,9)",
    low: 8,
    high: 9
  } ,  {
    name:"f(9,10)",
    low: 9,
    high: 10
  } ,  {
    name:" ",
  } ,  {
    name:" f(1,2)",
    low: 1,
    high: 2
  } ,  {
    name:"f(1,3)",
    low: 1,
    high: 3
  },  {
    name:"f(1,4)",
    low: 1,
    high: 4
  } ,  {
    name:"f(1,5)",
    low: 1,
    high: 5
  } ,  {
    name:"f(1,6)",
    low: 1,
    high: 6
  } ,  {
    name:"f(1,7)",
    low: 1,
    high: 7
  } ,  {
    name:"f(1,8)",
    low: 1,
    high: 8
  } ,  {
    name:"f(1,9)",
    low: 1,
    high: 9
  } ,  {
    name:"f(1,10)",
    low: 1,
    high: 10
  } 
  ];
  
  
  Highcharts.chart('rates-chart', {
  
    chart: {
      type: 'dumbbell',
      inverted: true,
      height: "80%"
    },
  
    legend: {
      enabled: false
    },
  
  
    title: {
      text: 'Relevant periods in each rate'
    },
  
    tooltip: {
      shared: true
    },
  
    xAxis: {
      type: 'category'
    },
  
    yAxis: {
      title: {
        text: 'Years'
      },
      max: 10
    },
  
    series: [{
      name: 'Relevant years',
      data: data
    }], 
    credits: {
        enabled: false
    }
  
  });