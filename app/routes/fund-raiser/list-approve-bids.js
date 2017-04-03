import Ember from 'ember';
export default Ember.Route.extend( {
    model() {
        var data=[ {
            "campaignId": "125", "campaignname": "xyz", "fundername": "Rahul", "funderamount": "300", "status": false
        }
        , {
            "campaignId": "126", "campaignname": "abc", "fundername": "Rajesh", "funderamount": "400", "status": false
        }
        , {
            "campaignId": "127", "campaignname": "rtu", "fundername": "Rakesh", "funderamount": "500", "status": true
        }
        ];
        return data;
    }
}

);