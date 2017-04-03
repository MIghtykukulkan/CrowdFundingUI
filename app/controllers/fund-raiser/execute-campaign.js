import Ember from 'ember';

export default Ember.Controller.extend({
 columns: [ {
        "propertyName": "campaignId", "title": "Campaign Id", "filterPlaceholder": "Campaign Id"
    }
    , {
        "propertyName": "campaigndetails", "title": "Campaign Details", "filterPlaceholder": "Campaign Details"
    }
    , {
        "propertyName": "status", "title": "Status", "filterPlaceholder": "Status"
    }
    , ],
});
