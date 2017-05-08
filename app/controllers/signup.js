import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    name: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-. ]+$/
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
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        })
    ],

    Organisationname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-1-9-0/-/. ]+$/
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
            regex: /^[A-Za-z/./_/ ]+$/
        })
    ],

    enterdesignation: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/./_/ ]+$/
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
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        })
    ],

});

export default Ember.Controller.extend(Validations, {
    isIndividualAuthorize: false,
    isOrganisationAuthorize: false,
    isShowingModal: false,
    organisationtype: ['NGO / Nonprofit', 'Social Enterprise', 'Community Organization', 'Corporate', 'Startup', 'Others', ],

    actions: {

        registerindividual: function(record) {

            this.set('isIndividualAuthorize', true);
            this.set('isOrganisationAuthorize', false);

        },

        registerorganisation: function(record){
            this.set('isOrganisationAuthorize', true);
            this.set('isIndividualAuthorize', false);
        },
        toggleModal: function() {
            var name = this.get('name');
            var email = this.get('email');
            var confirmemail = this.get('confirmemail');
            var phonenumber = this.get('phonenumber');
            if (name === null || name === undefined || name === "") {
                this.set('error', "field cannot be empty")
                return;
            } else if (email === null || email === undefined || email === "") {
                this.set('errorm', "field cannot be empty")
                return;
            } else if (confirmemail === null || confirmemail === undefined || confirmemail === "") {
                this.set('errormess', "field cannot be empty")
                return;
            } else if (phonenumber === null || phonenumber === undefined || phonenumber === "") {
                this.set('errormessage', "field cannot be empty")
                return;
            }

            this.toggleProperty('isShowingModal');
        },


        toggleModal1: function() {
            //var chosen = this.get('selectedtype');
            //console.log(chosen);
            var Organisationname = this.get('Organisationname');
            var emailid = this.get('emailid');
            var fullname = this.get('fullname');
            var enterdesignation = this.get('enterdesignation');
            var email2 = this.get('email2');
            var phoneno = this.get('phoneno');
            /*if (chosen === null || chosen === undefined) {
                this.set('errorMessage1', "Please Select Oragnisation");
                return;
            }*/
            if (Organisationname === null || Organisationname === undefined || Organisationname === "") {
                this.set('errormessage2', "field cannot be empty")
                return;
            } else if (emailid === null || emailid === undefined || emailid === "") {
                this.set('errormessage3', "field cannot be empty")
                return;
            } else if (fullname === null || fullname === undefined || fullname === "") {
                this.set('errormessage4', "field cannot be empty")
                return;
            } else if (enterdesignation === null || enterdesignation === undefined || enterdesignation === "") {
                this.set('errormessage5', "field cannot be empty")
                return;
            } else if (email2 === null || email2 === undefined || email2 === "") {
                this.set('errormessage6', "field cannot be empty")
                return;
            } else if (phoneno === null || phoneno === undefined || phoneno === "") {
                this.set('errormessage7', "field cannot be empty")
                return;
            }
            this.toggleProperty('isShowingModal');
        },

        register: function() {
            console.log("Test");
        },
       /* toggleModal1: function() {
            var chosen = this.get('selectedtype');
            console.log(chosen);

            var mycontroller = this;
            if (chosen === null || chosen === undefined) {
                this.set('errorMessage1', "Please Select Oragnisation");
                return false;
            } else {
                this.set('errorMessage1', "");
                this.set('chosenTest', chosen);
                this.toggleProperty('isShowingModal');
    }
        }*/
    }
});