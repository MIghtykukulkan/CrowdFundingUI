import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data=[ {
            "campaignId": "125", "campaigndetails": "xyz", "fundtransfer": "80%", "regStatus": true, "campStatus": false
        }
        , {
            "campaignId": "126", "campaigndetails": "abc", "fundtransfer": "40%", "regStatus": false, "campStatus": false
        }
        , {
            "campaignId": "127", "campaigndetails": "rtu", "fundtransfer": "100%", "regStatus": true, "campStatus": true
        }
        ];
        return data;
    }
});
