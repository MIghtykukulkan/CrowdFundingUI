import Ember from 'ember';

export default Ember.Controller.extend({
    isPartAuthorize: false,

    columns: [{
            "propertyName": "ID",
            "title": "ID",
            "filterPlaceholder": "Enter Id"
        },
        {
            "propertyName": "Type",
            "title": "Type",
            "filterPlaceholder": "Enter Type"
        },
        {
            "propertyName": "ParticipantName",
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
            this.set('isPartAuthorize', true);
            this.set('participantName', record.participantName);
            this.set('message', record.participantName + " has been Block");
        },

        dismissModal: function() {
            this.set('isPartAuthorize', false);
        },
        authorizeParticipants : function(){
             alert(this.get('message'));
             this.toggleProperty('isPartAuthorize');
        },

         toggleModal: function() {
           this.toggleProperty('isPartAuthorize');
       } ,

    }
});