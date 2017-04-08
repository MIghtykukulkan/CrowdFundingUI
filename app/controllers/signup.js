import Ember from 'ember';

export default Ember.Controller.extend({
    isIndividualAuthorize: false,
    isOrganisationAuthorize: false,
    actions: {

        registerindividual: function(record) {

            this.set('isIndividualAuthorize', true);
            this.set('isOrganisationAuthorize', false);

        },

        registerorganisation: function(record) {
            this.set('isOrganisationAuthorize', true);
            this.set('isIndividualAuthorize', false);
        },

        register: function() {

        }

    }
});