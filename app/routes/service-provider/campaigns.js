import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
                "campaignId": "1",
                "campaignName": "Help",
                "campaignType": "Campaign1"
            },
            {
                "campaignId": "2",
                "campaignName": "Promote",
                "campaignType": "Campaign2"
            },
            {
                "campaignId": "3",
                "campaignName": "Partner",
                "campaignType": "Campaign3"
            }
        ];

        return data;
    }
});