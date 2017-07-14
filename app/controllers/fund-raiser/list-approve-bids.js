import Ember from 'ember';
export default Ember.Controller.extend({
    isFunderAuthorize: false,
    columns: [{
        "propertyName": "CampaignName",
        "title": "Project Name",
        "filterPlaceholder": "Project Name"
    }, {
        "propertyName": "FunderName",
        "title": "Funder Name",
        "filterPlaceholder": "Funder Name"
    }, {
        "propertyName": "AmountNeeded",
        "title": "Amount Needed",
        "filterPlaceholder": "Amount Needed"
    }, {
        "propertyName": "Bid",
        "title": "Bid",
        "filterPlaceholder": "Bid"
    }, {
        "title": "Approval Status",
        "template": "action-buttons"
    }, ],

    actions: {

        authorize: function(record) {
            this.toggleProperty('isFunderAuthorize');
            //this.set('isFunderAuthorize', true);
            this.set('fundername', record.fundername);
            this.set('campaignname', record.campaignname);
            this.set('message', record.fundername + "'s bid for " + record.campaignname + "has been successfully approved.");
        },

        dismissModal: function(record) {
            this.toggleProperty('isFunderAuthorize');
            //this.set('isFunderAuthorize', false);
            this.set('message', this.get('fundername') + "'s bid for " + this.get('campaignname') + "has been rejected.");
            alert(this.get('message'));
        },
        approvebids: function() {
            alert(this.get('message'));
            this.toggleProperty('isFunderAuthorize');
        },
       toggleModal: function() {
           this.toggleProperty('isFunderAuthorize');
       } 
    }
});