import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

           rewardSelection: function(arg, arg1) {
            var amount= arg;
            var reward= arg1;
            this.set('amount', arg);
            this.set('reward', arg1);
            //console.log('IMG: '+ arg);
            console.log(amount);
            console.log(reward);
           //this.transitionToRoute('campaign-detail');
        },
        payment : function()
        {
            alert("Payment Successfully");
        }

    }
});
