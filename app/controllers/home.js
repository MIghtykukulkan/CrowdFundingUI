import Ember from 'ember';

export default Ember.Controller.extend({
        education : true, 
     actions: {
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
