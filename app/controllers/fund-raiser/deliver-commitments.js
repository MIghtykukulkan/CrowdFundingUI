import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [{
        "propertyName": "ProjectId",
        "title": "Project Id",
        "filterPlaceholder": "Project Id"
    }, {
        "propertyName": "Projectdetails",
        "title": "Project Details",
        "filterPlaceholder": "Project Details"
    }, {
        "propertyName": "fundername",
        "title": "Funder Name",
        "filterPlaceholder": "Funder Name"
    }, {
        "propertyName": "donation",
        "title": "Donation",
        "filterPlaceholder": "Donation"
    }, {
        "propertyName": "eligible",
        "title": "Eligible",
        "filterPlaceholder": "Eligible"
    }, {
        "title": "Action",
        "template": "deliver-commitment-action-buttons"
    }, ],

    actions: {
        authorize: function(record) {
            this.set('isCommitAuthorize', true);
            this.set('eligible', record.eligible);
        },

        dismissModal: function() {
            this.set('isCommitAuthorize', false);
        }
    }
});