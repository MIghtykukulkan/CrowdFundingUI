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
        "propertyName": "status", "title": "Status", "filterPlaceholder": "Status"
    }
    , ],
});
