import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    Ratings: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],
});

export default Ember.Controller.extend(Validations,{
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