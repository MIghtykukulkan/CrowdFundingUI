import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = [{
            "campaignname": "Avarice - A short film",
            "fundername": "Lokesh Reddi",
            "pleageamount": "300",
            "receivedamount": "80%",
            "rewards": "T-shirt",
            "status": "Fund Received"
        }, {
            "campaignname": "Spin Be Fit",
            "fundername": "Kavi",
            "pleageamount": "400",
            "receivedamount": "70%",
            "rewards": "T-shirt",
            "status": "Initiate Campaign"
        }, {
            "campaignname": "The Rhinos Need Help",
            "fundername": "Mohanraj PB",
            "pleageamount": "500",  
            "receivedamount": "90%",
            "rewards": "T-shirt",
            "status": "Reward Delivered"
        }];
        return data;
    }
});