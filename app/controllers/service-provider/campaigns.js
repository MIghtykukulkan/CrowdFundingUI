import Ember from 'ember';

export default Ember.Controller.extend({
    isCampAuthorize: false,
    isCampClosure: false,

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
            "template": "campaign-action-button"
        }
    ],

    actions: {
        authorize: function(record) {
            if (record.regStatus) {
                this.send('closecampaign', record);
            } else {
                this.toggleProperty('isCampAuthorize');
                this.set('isCampClosure', false);
                this.set('campaignName', record.campaignName);
            }
        },

        dismissModal: function() {
            this.set('isCampAuthorize', false);
            this.set('isCampClosure', false);
        },

        closecampaign: function(record) {
            
            this.toggleProperty('isCampClosure');
            this.set('isCampAuthorize', false);
            this.set('campaignName', record.campaignName);
        }
    }
});

