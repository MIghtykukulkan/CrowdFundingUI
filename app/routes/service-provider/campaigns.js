import Ember from 'ember';
import CONFIG from 'crowdfunding/config/environment';

export default Ember.Route.extend({
    model() {
        /*var data = [{
                "campaignId": "1",
                "campaignName": "Help",
                "campaignType": "Save Water Campaign",
                "regStatus": true,
                "campStatus": false
            },
            {
                "campaignId": "2",
                "campaignName": "Promote",
                "campaignType": "Animal exploitation",
                "regStatus": false,
                "campStatus": false
            },
            {
                "campaignId": "3",
                "campaignName": "Partner",
                "campaignType": "Orphans Campaign",
                "regStatus": true,
                "campStatus": true
            }
        ];*/
        var data;
           //var token = sessionStorage.getItem('token');
           //console.log(token);
           return $.ajax({
                    url: CONFIG.BASE_URL + "/service-provider/campaigns/",
                    type: 'GET',
                    accepts: 'application/json',
                    //Authorization: token,
                    
                    success: function(data) {
                        //alert("success"+JSON.stringify(data))
                        console.log(JSON.stringify(data)) 
                       
                        return data,
                        console.log('DEBUG: GET Enquiries OK');
                    },
                    error: function(err) {
                        console.log(data)
                        console.log('err')
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });

        //return data;
    }
});