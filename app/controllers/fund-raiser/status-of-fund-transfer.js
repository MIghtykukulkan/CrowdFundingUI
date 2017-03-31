import Ember from 'ember';

export default Ember.Controller.extend({
     columns: [ {
        "propertyName": "campaignId", "title": "Campaign Id"
    }
    , {
        "propertyName": "campaignname", "title": "Campaign Name"
    }
    , {
        "propertyName": "fundername", "title": "Funder Name"
    }
    , {
        "propertyName": "funderamount", "title": "Funder Amount"
    }
    , ],
});
