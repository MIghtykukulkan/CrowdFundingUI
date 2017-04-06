import Ember from 'ember';

export default Ember.Controller.extend({
     columns: [ {
        "propertyName": "campaignname", "title": "Campaign Name", "filterPlaceholder": "Campaign Name"
    }
    , {
        "propertyName": "pledgeamount", "title": "Pledge Amount", "filterPlaceholder": "Pledge Amount"
    }
    , {
        "propertyName": "receivedamount", "title": "Received Amount", "filterPlaceholder": "Received Amount"
    }
    , {
        "propertyName": "%ofreceivedamount", "title": "% of Received Amount", "filterPlaceholder": "% of Rcvd Amount"
    }
    ,{
        "propertyName": "status", "title": "Status", "filterPlaceholder": "Status"
    }
    , ],
});
