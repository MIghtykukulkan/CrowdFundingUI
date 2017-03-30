import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [{
            "propertyName": "campaignId",
            "title": "ID"
        },
        {
            "propertyName": "campaignName",
            "title": "Name"
        },
        {
            "propertyName": "campaignType",
            "title": "Type"
        }
    ]
});