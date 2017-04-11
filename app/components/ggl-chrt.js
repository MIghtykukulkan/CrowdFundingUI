import Ember from 'ember';

export default Ember.Component.extend({
didInsertElement() {
google.charts.load('upcoming', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
      ['Country', 'Campaigns'],
      ['Germany', 100],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['Russia', 700],
      ['India',200],
      ['Australia',800],
      ['Pakistan',50],
      ['China',900],
      ['Greenland',1000],
      
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
 }
   });
