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


var app = new Vue({
  el: '#app',
  data: {
    templates: templates,
    default_template: 2,
    current_template: templates[0],
    salesOverview: salesOverview,
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