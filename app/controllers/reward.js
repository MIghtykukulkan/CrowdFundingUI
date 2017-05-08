import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingHelp: false,
    isShowingModal: false,

    actions: {
        noRewardSelection: function(arg, arg1) {
            var amount = arg;
            var reward = arg1;
            this.set('message', "You have not selected any rewards and you want to contribute Rs "+amount+"?");
           },

        rewardSelection: function(arg, arg1) {
            var amount = arg;
            var reward = arg1;
            this.set('message', "You have selected Rs. " + amount + " and You will get " + reward + " reward. Do you want to continue?");
        },
        
        
        payment: function() {
             alert("Do not Refresh the page....");
            window.location.replace("https://www.billdesk.com/savepgi/");
        },

        showHelp: function() {
            this.toggleProperty('isShowingHelp');
        }
    }
});