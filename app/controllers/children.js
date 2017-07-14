import Ember from 'ember';
import CONFIG from 'crowdfunding/config/environment';

export default Ember.Controller.extend({
    actions: {
        campaignDetails: function(arg, arg1, arg2, arg3) {
            var imgURL = arg;
            var desc = arg1;
            var c_title = arg2;
            var createdby = arg3;
            sessionStorage.setItem('imgURL', arg);
            sessionStorage.setItem('desc', arg1);
            sessionStorage.setItem('c_title', arg2);
            sessionStorage.setItem('createdby', arg3);
             var datastring;
            $.ajax({
                url: CONFIG.BASE_URL + "/crowdfunding/createcampaign",
                type: 'GET',
                contentType: 'application/json;charset=utf-8',
            //Authorization: token,
        
                success: function(datastring) {
                    //alert("success"+JSON.stringify(data))
                            console.log("1233");
                    console.log("data"+JSON.stringify(datastring));
                        // alert("data"+JSON.stringify(data));
                    return datastring,
                        console.log('DEBUG: GET Enquiries OK');
                 },
                 error: function(err) {
                    console.log(datastring);
                    console.log("Error : " + JSON.stringify(err));
                    console.log('DEBUG: GET Enquiries Failed');
                    }
                 });                         
            this.transitionToRoute('campaign-detail');
        },
    }
});