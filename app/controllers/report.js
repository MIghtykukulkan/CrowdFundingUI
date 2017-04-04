import Ember from 'ember';

export default Ember.Controller.extend({
     columns: [ {
        "propertyName": "campaignname", "title": "Campaign Name", "filterPlaceholder": "Campaign Name"
    }
    , {
        "propertyName": "fundername", "title": "Funder Name", "filterPlaceholder": "Funder Name"
    }
    , {
        "propertyName": "funderamount", "title": "Funder Amount", "filterPlaceholder": "Funder Amount"
    }
    , {
        "propertyName": "fundtransfer", "title": "Fund Transfer", "filterPlaceholder": "Fund Transfer"
    }
    ,{
        "propertyName": "deliverablestatus", "title": "Deliverable Status", "filterPlaceholder": "Deliverable Status"
    }
    , ],
});
