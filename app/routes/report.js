import Ember from 'ember';

var display ="";

export default Ember.Route.extend({
   
      model() {
        /*var data=[{
            "campaignname": "Seed Funding",  "pledgeamount": "10000/-", "receivedamount": "10000/-","fundsreceived": "100%", "status": "Received",
        }
        , {
           "campaignname": "Hamari Ganga",  "pledgeamount": "15000/-", "receivedamount": "0","fundsreceived": "66.67%", "status": "Pending"
        }
        , {
            "campaignname": "Plant Tree",  "pledgeamount": "20000/-", "receivedamount": "20000/-","fundsreceived": "70%","status": "Not Received"
        }
        ];*/
       
        var data;
        
           //var token = sessionStorage.getItem('token');
           //console.log("token"+token);
           return $.ajax({
                    url: 'http://localhost:8082/report',
                    type: 'GET',
                    accepts: 'application/json',
                    //Authorization: token,
                    
                   success: function(data) {
                        //alert("success"+JSON.stringify(data))
                       // console.log(JSON.data = data;
                      console.log("datastring :"+JSON.stringify(data));
                        return data;
                       
                    },
                    error: function(err) {
                        console.log(data);
                        console.log('err')
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });
                //this.set("display",data);
                
 //console.log("datastring :"+datastring);
 //return data;


    }
});
