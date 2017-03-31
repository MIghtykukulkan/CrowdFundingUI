import Ember from 'ember';

export default Ember.Controller.extend({
 columns: [ {
        "propertyName": "campaignId", "title": "Campaign Id"
    }
    , {
        "propertyName": "campaigndetails", "title": "Campaign Details"
    }
    , {
        "propertyName": "status", "title": "Status"
    }
    , ],
});
