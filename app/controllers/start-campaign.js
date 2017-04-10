import Ember from 'ember';

export default Ember.Controller.extend({
    showStartResponse: false,
    isAddReward: false,
    isSaveReward: false,

    actions: {
        start: function(){
            this.set('showStartResponse', true);    
        },
        
        regOK: function() {
            var mycontroller = this;
            mycontroller.set('showRegResponse', false);
            mycontroller.transitionToRoute('fund-raiser');
        },

        dismissModal: function() {
            this.set('showStartResponse', false);
        },

        createCampaign: function() {

        },

        addRewards: function() {
            this.toggleProperty('isAddReward');
        },

        saveRewards: function() {
            this.set('isAddReward', false);
            this.toggleProperty('isSaveReward');
        }
     },
    
     /*deliveryDate: Ember.computed(function () {
        let date = new Date();
        date.setDate(date.getDate() + 2);
        return date;
    })*/
});