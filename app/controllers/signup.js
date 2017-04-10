import Ember from 'ember';

export default Ember.Controller.extend({
    isIndividualAuthorize: false,
    isOrganisationAuthorize: false,
    isShowingModal: false,
    actions: {

        registerindividual: function(record) {

            this.set('isIndividualAuthorize', true);
            this.set('isOrganisationAuthorize', false);

        },

        registerorganisation: function(record) {
            this.set('isOrganisationAuthorize', true);
            this.set('isIndividualAuthorize', false);
        },
        toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    toggleModal1: function() {
      this.toggleProperty('isShowingModal');
    },

        register: function() {
            console.log("Test");
        }
    }
});