import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "campaignId": "1",
                "campaignName": "Help",
                "campaignType": "Campaign1",
                "regStatus": true,
                "campStatus": false
            },
            {
                "campaignId": "2",
                "campaignName": "Promote",
                "campaignType": "Campaign2",
                "regStatus": false,
                "campStatus": false
            },
            {
                "campaignId": "3",
                "campaignName": "Partner",
                "campaignType": "Campaign3",
                "regStatus": true,
                "campStatus": true
            }
        ];

        return data;
    }
});