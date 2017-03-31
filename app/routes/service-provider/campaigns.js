import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "campaignId": "1",
                "campaignName": "Help",
                "campaignType": "Campaign1",
                "status": true
            },
            {
                "campaignId": "2",
                "campaignName": "Promote",
                "campaignType": "Campaign2",
                "status": false
            },
            {
                "campaignId": "3",
                "campaignName": "Partner",
                "campaignType": "Campaign3",
                "status": true
            }
        ];

        return data;
    }
});