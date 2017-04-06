import Ember from 'ember';

export default Ember.Route.extend({
      model() {
        var data=[ {
            "campaignname": "Save Water Campaign",  "pledgeamount": "10000/-", "receivedamount": "10000/-","%ofreceivedamount": "100%", "status": "Received"
        }
        , {
            "campaignname": "Animal exploitation",  "pledgeamount": "15000/-", "receivedamount": "10000/-","%ofreceivedamount": "66.67%", "status": "Pending"
        }
        , {
            "campaignname": "Orphans Campaign",  "pledgeamount": "20000/-", "receivedamount": "0/-","%ofreceivedamount": "0%","status": "Not Received"
        }
        ];
        return data;
    }
});
