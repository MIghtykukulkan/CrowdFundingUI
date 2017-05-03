import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    name: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z]+$/
        })
    ],

    email: [
        validator('presence', true),
        validator('format', {
            type: 'email'
        })
    ],

    confirmemail: [
         validator('confirmation', {
    on: 'email',
    message: 'email do not match'
  })
    ],

    phonenumber: [
        validator('presence', true),
        validator('format', {
            type: 'phone',
            min: 10,
            max: 10
        })
    ],

    Organisationname: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    emailid: [
        validator('presence', true),
        validator('format', {
            type: 'email'
        })
    ],

    fullname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z ]+$/
        })
    ],

     enterdesignation: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    email2: [
        validator('presence', true),
        validator('format', {
            type: 'email'
        })
    ],

    phoneno: [
        validator('presence', true),
        validator('format', {
            type: 'phone',
            min: 10,
            max: 10
        })
    ],

});

export default Ember.Controller.extend(Validations,{
    isIndividualAuthorize: false,
    isOrganisationAuthorize: false,
    isShowingModal: false,
    organisationtype: ['NGO / Nonprofit', 'Social Enterprise', 'Community Organization', 'Corporate', 'Startup', 'Others', ],

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