import Ember from 'ember';

export default Ember.Controller.extend({
    showFeedback: false,

    actions: {
        provideFeedback: function() {
            this.toggleProperty('showFeedback');
        },

        submitFeedback: function() {
            this.toggleProperty('showFeedback');
        }
    }
});