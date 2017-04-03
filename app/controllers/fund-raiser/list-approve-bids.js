import Ember from 'ember';
export default Ember.Controller.extend( {
    isFunderAuthorize: false,
    columns: [ {
        "propertyName": "campaignId", "title": "Campaign Id", "filterPlaceholder": "Campaign Id"
    }
    , {
        "propertyName": "campaignname", "title": "Campaign Name", "filterPlaceholder": "Campaign Name" 
    }
    , {
        "propertyName": "fundername", "title": "Funder Name", "filterPlaceholder": "Funder Name"
    }
    , {
        "propertyName": "funderamount", "title": "Funder Amount", "filterPlaceholder": "Funder Amount"
    }
    ,{
        "title": "Action", "template": "action-buttons"
    }
    , ],

    actions: {
        authorize: function(record) {
            this.set('isFunderAuthorize', true);
            this.set('fundername', record.fundername);
        },

        dismissModal: function() {
            this.set('isFunderAuthorize', false);
        }
    }
});