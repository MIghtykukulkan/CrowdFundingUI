import Ember from 'ember';

export default Ember.Controller.extend({
    isShowingHelp: false,

    actions: {
        rewardSelection: function(arg, arg1) {
            var amount = arg;
            var reward = arg1;

            if (amount === "nill") {
                this.set('message', "You have not selected any rewards. Are you sure to continue?");
            } else {
                this.set('message', "You have selected Rs. " + amount + " and You will get " + reward + " reward. Do you want to continue?");
            }
        },

        payment: function() {
            window.location.replace("https://www.billdesk.com/savepgi/");
        },

        showHelp: function() {
            this.toggleProperty('isShowingHelp');
        }
    }
});