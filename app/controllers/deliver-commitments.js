import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [ {
        "propertyName": "campaignId", "title": "Campaign Id"
    }
    , {
        "propertyName": "campaigndetails", "title": "Campaign Details"
    }
    , {
        "propertyName": "fundername", "title": "Funder Name"
    }
    , {
        "propertyName": "donation", "title": "Donation"
    }
    ,{
        "propertyName": "eligible", "title": "Eligible"
    }
    , ],
});
