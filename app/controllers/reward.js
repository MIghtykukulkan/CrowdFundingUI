import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

           rewardSelection: function(arg, arg1) {
            var amount= arg;
            var reward= arg1;
            if (amount==="nill")
            {
            this.set('message', "You have not selected any rewards. Are you sure to continue?");
            }
            else{
            this.set('message', "You have selected Rs. "+ amount +" and You will get "+ reward + " reward. Do you want to continue?");
            }
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
