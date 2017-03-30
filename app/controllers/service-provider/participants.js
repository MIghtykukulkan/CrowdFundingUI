import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [{
            "propertyName": "participantId",
            "title": "ID"
        },
        {
            "propertyName": "participantType",
            "title": "Type"
        },
        {
            "propertyName": "participantName",
            "title": "Participant Name"
        }
    ]
});