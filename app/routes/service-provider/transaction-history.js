import Ember from 'ember';
import CONFIG from 'crowdfunding/config/environment';

export default Ember.Route.extend({
    model() {
        /*var data = [{
                "campaignname": "Save Water Campaign",
                "startdate": "01-06-2017",
                "enddate": "20-07-2017",
                "goalamount": "30000",
                "fundername": "Piyusha Patel",
                "fundercontribution": "16000",
                "fundstatus": "SP",
            },
            {
                "campaignname": "Animal exploitation",
                "startdate": "08-06-2017",
                "enddate": "10-07-2017",
                "goalamount": "50000",
                "fundername": "Rakesh Bharati",
                "fundercontribution": "40000",
                "fundstatus": "FR",
            },
            {
                "campaignname": "Orphans Campaign",
                "startdate": "05-06-2017",
                "enddate": "30-07-2017",
                "goalamount": "150000",
                "fundername": "Rahul Desai",
                "fundercontribution": "130000",
                "fundstatus": "SP",
            }
        ];*/
        var data;
           //var token = sessionStorage.getItem('token');
           //console.log(token);
           return $.ajax({
                    url: CONFIG.BASE_URL + "/service-provider/transaction-history",
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