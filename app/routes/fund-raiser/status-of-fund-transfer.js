import Ember from 'ember';

export default Ember.Route.extend({
     model() {
        var data=[ {
            "campaignname": "Save Water Campaign", "fundername": "Rahul", "pleageamount": "300","fundtransfered":"200","receivedamount":"80%","rewards":"T-shirt", "status": "Fund Received"
        }
        , {
            "campaignname": "Animal exploitation", "fundername": "Vikram", "pleageamount": "400","fundtransfered":"400","receivedamount":"70%","rewards":"T-shirt", "status": "Reward Delivered"
        }
        , {
            "campaignname": "Orphans Campaign", "fundername": "Uma", "pleageamount": "500","fundtransfered":"400","receivedamount":"90%","rewards":"T-shirt", "status": "Initiate Campaign"
        }
        ];
        return data;
    }
});
