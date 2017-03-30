import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "participantId": "1",
                "participantType": "Funder",
                "participantName": "FirstName1 LastName1"
            },
            {
                "participantId": "2",
                "participantType": "Funder-Raiser",
                "participantName": "FirstName2 LastName2"
            },
            {
                "participantId": "3",
                "participantType": "Customer",
                "participantName": "FirstName3 LastName3"
            }
        ];

        return data;
    }
});