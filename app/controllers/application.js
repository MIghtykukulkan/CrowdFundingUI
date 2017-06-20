import Ember from 'ember';
var browse="";
var showHelpPopUp = false;
export default Ember.Controller.extend({
    isShowingModel: false,
  //  browsecampaign:"",

    actions: {
        logout: function() {
            sessionStorage.clear();
            window.location.reload(true);
        },
        
        goTo: function(arg) {
        
           /*browse=arg;
             console.log('browecampaign:'+browse);
            
            // ajax call
            // create property to store response
            // goto individual routes and fetch this property there

            var data;
         $.ajax({
         url:"http://localhost:8082/crowdfunding/browsecampaign?"+arg,
         type: 'GET',
         contentType: 'application/json;charset=utf-8',
            //Authorization: token,
        
         success: function(data) {
                //alert("success"+JSON.stringify(data))
                     console.log("1233");
                console.log("data"+JSON.stringify(data));
                   // alert("data"+JSON.stringify(data));
                return data,
                    console.log('DEBUG: GET Enquiries OK');
            },
         error: function(err) {
                console.log("rest call failed..!!");
                console.log(data);
                console.log("Error : " + JSON.stringify(err));
                console.log('DEBUG: GET Enquiries Failed');
            }
        });*/

        //console.log("data"+data);

        if (arg === "Education")
            this.transitionToRoute('education');
        else if (arg === 'Children')
            this.transitionToRoute('children');
        else if (arg === 'Animal-welfare')
            this.transitionToRoute('animal-welfare');
        else if (arg === 'Environment')
            this.transitionToRoute('environment');
        else if (arg === 'Film')
            this.transitionToRoute('film');
        else if (arg === 'Dance')
            this.transitionToRoute('dance');
        },

        toggleModel: function() {
            this.toggleProperty('isShowingModel');
        },

        gotofaqs:function(){
            this.transitionToRoute('FAQs');
        },
        facebook: function() {
             window.location.replace("https://en-gb.facebook.com/login/");
        },
        twitter: function() {
             window.location.replace("https://twitter.com/login");
        },
        linkedin: function() {
             window.location.replace("https://in.linkedin.com/");
        },
         report: function() {
             var data1;
           return $.ajax({
                    url: 'http://localhost:8082/report',
                    type: 'GET',
                    accepts: 'application/json',
                    //Authorization: token,
                    
                   success: function(data) {
                        //alert("success"+JSON.stringify(data))
                       // console.log(JSON.stringify(data));
//                     this.set('dislpay', data);
                        console.log('display :'+JSON.stringify(data));
                        return data;
                      //console.log("datastring :"+datastring);
                       },
                    error: function(err) {
                        console.log(data);
                        console.log('err')
                        console.log('DEBUG: GET Enquiries Failed');
                    }
                });
        }
    }
});