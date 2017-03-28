import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        register: function() {
            this.transitionToRoute('sign-up');
        }
    }
});