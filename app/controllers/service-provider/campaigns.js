import Ember from 'ember';

export default Ember.Controller.extend({
    isCampAuthorize: false,

    columns: [{
            "propertyName": "campaignId",
            "title": "ID",
            "filterPlaceholder": "Enter Id"
        },
        {
            "propertyName": "campaignName",
            "title": "Name",
            "filterPlaceholder": "Enter Name"
        },
        {
            "propertyName": "campaignType",
            "title": "Type",
            "filterPlaceholder": "Enter Type"
        },
        {
            "title": "Action",
            "template": "action-buttons"
        }
    ],

    actions: {
        authorize: function(record) {
            this.set('isCampAuthorize', true);
            this.set('campaignName', record.campaignName);
        },

        dismissModal: function() {
            this.set('isCampAuthorize', false);
        }
    }
});