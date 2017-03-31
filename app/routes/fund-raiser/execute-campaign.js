import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data=[ {
            "campaignId": "125", "campaigndetails": "xyz", "status": "Pending"
        }
        , {
            "campaignId": "126", "campaigndetails": "abc", "status": "Pending"
        }
        , {
            "campaignId": "127", "campaigndetails": "rtu", "status": "Pending"
        }
        ];
        return data;
    }
});
