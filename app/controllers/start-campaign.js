import Ember from 'ember';

export default Ember.Controller.extend({
    showStartResponse: false,
     actions: {
        start: function(){
            this.set('showStartResponse', true);    
        },
         regOK: function() {
            var mycontroller = this;
            mycontroller.set('showRegResponse', false);
            mycontroller.transitionToRoute('fund-raiser');
        }
     },
        dismissModal: function() {
            this.set('showStartResponse', false);
        }

});

