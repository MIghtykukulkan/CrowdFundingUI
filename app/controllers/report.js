import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [{
        "propertyName": "campaignname",
        "title": "Campaign Name",
        "filterPlaceholder": "Campaign Name"
    }, {
        "propertyName": "pledgeamount",
        "title": "Pledge Amount",
        "filterPlaceholder": "Pledge Amount"
    }, {
        "propertyName": "receivedamount",
        "title": "Received Amount",
        "filterPlaceholder": "Received Amount"
    }, {
        "propertyName": "fundsreceived",
        "title": "Fund Received (%)",
        "filterPlaceholder": "Fund Received (%)"
    }, {
        "propertyName": "status",
        "title": "Status",
        "filterPlaceholder": "Status"
    }, ],
});