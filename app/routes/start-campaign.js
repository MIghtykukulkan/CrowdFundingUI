import Ember from 'ember';


export default Ember.Route.extend({
    model() {
        var userType = sessionStorage.getItem('userType');
        var showFunderModules = sessionStorage.getItem('showFunderModules');
        var showStartCampaign = sessionStorage.getItem('showStartCampaign');
        function encodeImageFileAsURL(cb) {
    return function(){
        var file = this.files[0];
        var reader  = new FileReader();
        reader.onloadend = function () {
            cb(reader.result);
        }
        reader.readAsDataURL(file);
    }
}

$('#inputFileToLoad').change(encodeImageFileAsURL(function(base64Img){
    $('.output')
      .find('textarea')
        .val(base64Img)
        .end()
      .find('a')
        .attr('href', base64Img)
        .text(base64Img)
        .end()
      .find('img')
        .attr('src', base64Img);
}));
        

        if (userType === undefined || userType === null) {
            alert("Please Login");
            sessionStorage.setItem('goToStartCampaign', true);
            this.transitionTo('login');
        } else if (userType === "Funder") {
            this.controllerFor('application').set('userType', userType);
            this.controllerFor('application').set('showUser', true);
            this.controllerFor('home').set('showFunder', true);
            this.controllerFor('application').set('showFunderModules', true);
            this.controllerFor('application').set('showStartCampaign', false);
        } else {
            this.controllerFor('application').set('userType', userType);
            this.controllerFor('application').set('showUser', true);

        }

        var rewardtitle=this.controllerFor('addrewards').get('rewardtitle');
           console.log(rewardtitle);
        this.controllerFor('start-campaign').set('rewardtitle', rewardtitle);
        
        var rewardamount =this.controllerFor('addrewards').get('rewardamount');
            console.log(rewardamount);
        this.controllerFor('start-campaign').set('rewardamount', rewardamount);
             
        var rewarddescription =this.controllerFor('addrewards').get('rewarddescription');
            console.log(rewarddescription);
        this.controllerFor('start-campaign').set('rewarddescription', rewarddescription);
                 
       

    }
});