import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    Ratings: [
        validator('presence', true),
        validator('format', {
             regex:/[0-1-2-3-4-5-6-7-8-9]/,
            type: 'number'
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
             var Ratings = this.get('Ratings');
            if (Ratings === null || Ratings === undefined || Ratings === "") {
                this.set('Ratingserrormessage', "field cannot be empty")
                return;
            }
            this.toggleProperty('showFeedback');
        }
    }
});