import Ember from 'ember';
var likecount =0;
export default Ember.Controller.extend({
   // likecount:0,
    actions: {
        callRewards : function()
        {
            this.transitionToRoute('reward');
        },

        toggleModal : function()
        {
            var content = this.get('content');
            if (content === null || content === undefined || content === "") {
                this.set('errormessage', "you must have to enter some comments!!!!");
                return;
            }
            else{
                let {
                content
            } = this.getProperties('content');
                
            var dataString = {
                "content": content,
            };
            //console.log(CONFIG.GOURL);
            //alert('YOU ARE SUCCESSFULLY REGISTERED');
            //this.toggleProperty('isShowingModal');
            //this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            var message;
            console.log("Registration Input: " + JSON.stringify(dataString));
            return $.ajax({
            url: 'http://localhost:8082/campaign-detail',
            type: 'POST',
            accepts: 'application/json',
            data: dataString,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   //message=response.message.message;
                   console.log(response.message);
                   //mycontroller.set('uid',uid);
                   //mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                   mycontroller.toggleProperty('isShowingModal');
                   //mycontroller.set('loading_image_visibility', "hide");
                   //mycontroller.transitionToRoute('home');              
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });
            }
             
        },

        submit:function(){
           window.location.reload(true); 
        },

        aboutfundraiser : function(){
            this.transitionToRoute('home');
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
        likebutton:function(){
                console.log("in func");
                if(typeof(Storage) !== "undefined") {
                    console.log("in if condn");
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount)+1;
                        console.log("increment:"+localStorage.clickcount);
                        } else {
                             localStorage.clickcount = 1;
                             console.log(localStorage.clickcount);
                             }
                         }
                 },
        spambutton:function(){
                console.log("in func");
                if(typeof(Storage) !== "undefined") {
                        console.log("in if condn");
                         if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount)+1;
                        console.log("increment:"+localStorage.clickcount);
                        } else {
                             localStorage.clickcount = 1;
                             console.log(localStorage.clickcount);
                             }
                    }
       // this.set("likecount",localStorage.clickcount);
       likecount=localStorage.clickcount;
        console.log('likecount'+likecount);
        }
    }
});
