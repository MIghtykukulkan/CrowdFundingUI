import Ember from 'ember';

export default Ember.Controller.extend({
    // Used only for time series chart
    timeSeriesBarContent: [{
        time: d3.time.format('%Y-%m-%d').parse("2017-01-15"),
        label: "New Campaigns",
        value: 10,
        type: "total"
    }, {
        time: d3.time.format('%Y-%m-%d').parse("2017-01-15"),
        label: "Closed Campaigns",
        value: 20,
        type: "total"
    }, {
        time: d3.time.format('%Y-%m-%d').parse("2017-01-15"),
        label: "In-Progress Campaigns",
        value: 9,
        type: "total"
    }, {
        time: d3.time.format('%Y-%m-%d').parse("2017-02-15"),
        label: "New Campaigns",
        value: 15,
        type: "total"
    }, {
        time: d3.time.format('%Y-%m-%d').parse("2017-02-15"),
        label: "Closed Campaigns",
        value: 5,
        type: "total"
    }, {
        time: d3.time.format('%Y-%m-%d').parse("2017-02-15"),
        label: "In-Progress Campaigns",
        value: 10,
        type: "total"
    }]
});