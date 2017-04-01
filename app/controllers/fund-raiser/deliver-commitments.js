import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [ {
        "propertyName": "campaignId", "title": "Campaign Id", "filterPlaceholder": "Campaign Id"
    }
    , {
        "propertyName": "campaigndetails", "title": "Campaign Details", "filterPlaceholder": "Campaign Details"
    }
    , {
        "propertyName": "fundername", "title": "Funder Name", "filterPlaceholder": "Funder Name"
    }
    , {
        "propertyName": "donation", "title": "Donation", "filterPlaceholder": "Donation"
    }
    ,{
        "propertyName": "eligible", "title": "Eligible", "filterPlaceholder": "Eligible"
    }
    , ],
});
