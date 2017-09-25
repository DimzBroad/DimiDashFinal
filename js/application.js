var templates = [
  { id: 1, name: 'dark', value: 'css/darkTheme.css'},
  { id: 2, name: 'light', value: 'css/lightTheme.css'}
];

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

var salesOverview = "Monthly Sales Overview";
var salesAnalytics = "Analaytics";
var repAnalytics = "Anlaytics";
var targetAndGoals = "Target And Goals";
var coTarget = "SALES TARGET:";
var coTargetValue = 35;

var totalSales = "TOTAL SALES:";
var totalSalesValue = 15;

var reqSales = "REQUIRED SALES:";
var reqSalesValue = 35 - 15;

var indivSales = "Sales Agent Stats:";
var paulTarget = "PAUL TARGET:";
var paulTargetValue = 10;

var paulSales = "PAULS SALES:";
var paulSalesValue = 5;

var paulReqSales = "PAUL REQUIRED SALES";
var paulReqSalesValue = 5;

var samanthaTarget = "SAMANTHA TARGET:";
var samanthaTargetValue = 15;

var samanthaSales = "SAMANTHA SALES:";
var samanthaSalesValue = 6;

var samanthaReqSales = "SAMANTHA REQUIRED SALES:";
var samanthaReqSalesValue = 9;

var lukeTarget = "LUKE TARGET:";
var lukeTargetValue = 10;
var lukeSales = "LUKE SALES:";
var lukeSalesValue = 4;
var lukeReqSales = "LUKE REQUIRED SALES:";
var lukeReqSalesValue = 6;


var app = new Vue({
  el: '#app',
  data: {
    templates: templates,
    default_template: 2,
    current_template: templates[0],
    salesOverview: salesOverview,    totalSales: totalSales,
    totalSalesValue: totalSalesValue,
    coTarget: coTarget,
    coTargetValue: coTargetValue,

    reqSales: reqSales,
    reqSalesValue: reqSalesValue,
      
    indivSales: indivSales,
      
    paulTarget: paulTarget,
    paulTargetValue: paulTargetValue,
      
    paulSales: paulSales,
    paulSalesValue: paulSalesValue,
      
    paulReqSales: paulReqSales,
    paulReqSalesValue: paulReqSalesValue,

    samanthaTarget: samanthaTarget,
    samanthaTargetValue: samanthaTargetValue,
      
    samanthaSales: samanthaSales,
    samanthaSalesValue: samanthaSalesValue,
      
    samanthaReqSales: samanthaReqSales,
    samanthaReqSalesValue: samanthaReqSalesValue,
      
    lukeTarget: lukeTarget,
    lukeTargetValue: lukeTargetValue,
      
    lukeSales: lukeSales,
    lukeSalesValue: lukeSalesValue,
      
    lukeReqSales: lukeReqSales,
    lukeReqSalesValue: lukeReqSalesValue,
    salesAnalytics: salesAnalytics,
    repAnalytics: repAnalytics,
    targetAndGoals: targetAndGoals,
},
        methods: {
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
        return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    },
  },
  computed: {
    "columns": function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
  }
});

new Chartist.Line('#chartId1', {
  labels: ["0", "5","10","15","20","25","30"],
  series: [[0, 6, 4, 1, 2, 1, 2],
]
}, {
  low: 0,
  showArea: true,
  fullWidth: true,
  chartPadding: {
  right: 40
  }
});

new Chartist.Line('#chartId2', {
  labels: ["0", "5","10","15","20","25","30"],
  series: [
      [0, 3, 0, 2, 2, 0, 2],
      [0, 3, 2, 1, 2, 2, 2],
      [0, 1, 3, 0, 2, 0, 2],
]
}, {
  low: 0,
  fullWidth: true,
    showArea: true,
  chartPadding: {
  right: 40
  }
});

var data = {
  series: [5, 5]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('#chartId3', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

var data = {
  series: [6, 9]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('#chartId4', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

var data = {
  series: [4, 6]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('#chartId5', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});




