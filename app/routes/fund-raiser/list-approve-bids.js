import Ember from 'ember';
export default Ember.Route.extend({
        model() {
            var data = [{
                "campaignname": "Save Water Campaign",
                "fundername": "Sweta Vahia (4 outof 5)",
                "amountneeded": "30000",
                "bid": "1000",
                "status": true
            }, {
                "campaignname": "Animal exploitation",
                "fundername": "Rakesh Bharati (3 outof 5)",
                "amountneeded": "50000",
                "bid": "6000",
                "status": false
            }, {
                "campaignname": "Orphans Campaign",
                "fundername": "Shraddha Kharat  (2 outof 5)",
                "amountneeded": "150000",
                "bid": "60000",
                "status": false
            }];
            return data;
        }
    }

);