import Ember from 'ember';

export default Ember.Controller.extend({
     isCampAuthorize: false,
    isCampClosure: false,

 columns: [ {
        "propertyName": "campaignId", "title": "Campaign Id", "filterPlaceholder": "Campaign Id"
    }
    , {
        "propertyName": "campaigndetails", "title": "Campaign Details", "filterPlaceholder": "Campaign Details"
    }
    , {
        "propertyName": "fundtransfer", "title": "Fund transfer", "filterPlaceholder": "Fund transfer"
    }
    ,{
        "title": "Action", "template": "executecampaign-action-buttons"
    }
    , ],

actions: {
        authorize: function(record) {
            if (record.regStatus) {
                this.send('complete', record);
            } else {
                this.set('isCampAuthorize', true);
                this.set('isCampClosure', false);
                this.set('campaignId', record.campaignId);
            }
        },

        dismissModal: function() {
            this.set('isCampAuthorize', false);
            this.set('isCampClosure', false);
        },

        complete: function(record) {
            this.set('isCampClosure', true);
            this.set('isCampAuthorize', false);
            this.set('campaignId', record.campaignId);
        }
    }
});

