import Ember from 'ember';

export default Ember.Route.extend({
     model() {
        var data=[ {
            "campaignname": "xyz", "fundername": "Rahul", "funderamount": "300", "status": "Received"
        }
        , {
            "campaignname": "abc", "fundername": "Rajesh", "funderamount": "400", "status": "Received"
        }
        , {
            "campaignname": "rtu", "fundername": "Rakesh", "funderamount": "500", "status": "Initiated"
        }
        ];
        return data;
    }
});
