import Ember from 'ember';

export default Ember.Controller.extend({

            columns: [{
                "propertyName": "camp-name",
                "title": "Campaign Name"
            }, {
                "propertyName": "contribution",
                "title": "Contribution"
            }, {
                "propertyName": "status",
                "title": "Status"
            }, ]
});