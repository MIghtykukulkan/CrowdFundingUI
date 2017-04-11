import Ember from 'ember';

export default Ember.Controller.extend({
    isPartAuthorize: false,

    columns: [{
            "propertyName": "participantId",
            "title": "ID",
            "filterPlaceholder": "Enter Id"
        },
        {
            "propertyName": "participantType",
            "title": "Type",
            "filterPlaceholder": "Enter Type"
        },
        {
            "propertyName": "participantName",
            "title": "Participant Name",
            "filterPlaceholder": "Enter Name"
        },
        {
            "title": "Action",
            "template": "participant-action-button"
        }
    ],

    actions: {
        authorize: function(record) {
            this.toggleProperty('isPartAuthorize');
            this.set('participantName', record.participantName);
        },

        dismissModal: function() {
            this.set('isPartAuthorize', false);
        }
    }
});