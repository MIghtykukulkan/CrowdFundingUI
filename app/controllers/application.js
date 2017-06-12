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
            //this.set('browsecampaign',arg);
            browse=arg;
            // console.log('browecampaign'+browsecampaign);
            
            // ajax call
            // create property to store response
            // goto individual routes and fetch this property there

            var data;
         $.ajax({
         url:"http://localhost:8082/crowdfunding/browsecampaign/"+arg,
         type: 'GET',
         contentType: 'application/json',
            //Authorization: token,
         success: function(data) {
                //alert("success"+JSON.stringify(data))
                console.log("data"+JSON.stringify(data));
                    alert("data"+JSON.stringify(data));
                return data,
                    console.log('DEBUG: GET Enquiries OK');
            },
         error: function(err) {
             console.log("rest call failed..!!")
                console.log(data);
                console.log("Error : " + JSON.stringify(err));
                console.log('DEBUG: GET Enquiries Failed');
            }
        });

        console.log(data);

            if (arg === "education")
                this.transitionToRoute('education');
            else if (arg === 'children')
                this.transitionToRoute('children');
            else if (arg === 'animal-welfare')
                this.transitionToRoute('animal-welfare');
            else if (arg === 'environment')
                this.transitionToRoute('environment');
            else if (arg === 'film')
                this.transitionToRoute('film');
            else if (arg === 'dance')
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
        }
    }
});