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
