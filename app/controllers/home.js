import Ember from 'ember';

export default Ember.Controller.extend({
        education : true, 
        
actions: {

           campaignDetails: function(arg, arg1, arg2) {
            var imgURL = arg;
            var category = arg1;
            var c_title = arg2;
            sessionStorage.setItem('imgURL', arg);
            sessionStorage.setItem('category', arg1);
            sessionStorage.setItem('c_title', arg2);
            //console.log('IMG: '+ arg);
            console.log(imgURL);
            console.log(category);
            console.log(c_title);
            this.transitionToRoute('campaign-detail');
        },

        goTo: function(arg) {
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
   
             approvebids:function(){

            this.transitionToRoute('list-approve-bids');

},
fundtransfer:function(){

            this.transitionToRoute('status-of-fund-transfer');

},
executecampaign:function(){

            this.transitionToRoute('execute-campaign');

},
delivercommitments:function(){

            this.transitionToRoute('deliver-commitments');

}
     },


});