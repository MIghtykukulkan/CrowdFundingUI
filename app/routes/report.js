import Ember from 'ember';

export default Ember.Route.extend({
      model() {
        var data=[ {
            "campaignname": "xyz", "fundername": "Rahul", "funderamount": "300", "fundtransfer": "Received", "deliverablestatus": "Received"
        }
        , {
            "campaignname": "abc", "fundername": "Rajesh", "funderamount": "400", "fundtransfer": "Inprocess", "deliverablestatus": "Received"
        }
        , {
            "campaignname": "rtu", "fundername": "Rakesh", "funderamount": "500", "fundtransfer": "Initiated", "deliverablestatus": "Pending"
        }
        ];
        return data;
    }
});
