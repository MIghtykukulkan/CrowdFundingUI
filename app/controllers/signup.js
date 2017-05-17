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
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],

    confirmemail: [
        validator('confirmation', {
            on: 'email',
            message: 'Email IDs do not match'
        })
    ],

    phonenumber: [
        validator('presence', true),
        validator('format', {
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        })
    ],
});

var ValidationsOrg = buildValidations({
    Organisationname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-1-9-0/-/. ]+$/,
            message: ''
        })
    ],

    emailid: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],

    fullname: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/./_/ ]+$/,
            message: ''
        })
    ],

    enterdesignation: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/./_/ ]+$/,
            message: ''
        })
    ],

    email2: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],

    phoneno: [
        validator('presence', true),
        validator('format', {
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/
        })
    ],
});

export default Ember.Controller.extend(Validations, ValidationsOrg, {
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
            /*var name = this.get('name');
            var email = this.get('email');
            var confirmemail = this.get('confirmemail');
            var phonenumber = this.get('phonenumber');

            if ((name === null || name === undefined || name === "") && 
                (email === null || email === undefined || email === "") && 
                (confirmemail === null || confirmemail === undefined || confirmemail === "") && 
                (phonenumber === null || phonenumber === undefined || phonenumber === "")) {
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
            }*/
 
            this.toggleProperty('isShowingModal');
        },


        toggleModal1: function() {
            var chosen = this.get('selectedtype');
            console.log(chosen);
            var Organisationname = this.get('Organisationname');
            var emailid = this.get('emailid');
            var fullname = this.get('fullname');
            var enterdesignation = this.get('enterdesignation');
            var email2 = this.get('email2');
            var phoneno = this.get('phoneno');

           /* if ((chosen === null || chosen === undefined) || 
                (Organisationname === null || Organisationname === undefined || Organisationname === "") || 
                (emailid === null || emailid === undefined || emailid === "") ||
                (fullname === null || fullname === undefined || fullname === "") ||
                (enterdesignation === null || enterdesignation === undefined || enterdesignation === "") ||
                (email2 === null || email2 === undefined || email2 === "") ||
                (phoneno === null || phoneno === undefined || phoneno === "")) {
                this.set('errormessage1', "This field cannot be blank");
                this.set('errormessage2', "This field cannot be blank");
                this.set('errormessage3', "This field cannot be blank");
                this.set('errormessage4', "This field cannot be blank");
                this.set('errormessage5', "This field cannot be blank");
                this.set('errormessage6', "This field cannot be blank");
                this.set('errormessage7', "This field cannot be blank");
                this.toggleProperty('isShowingModals');
                return;
            }*/ 
            if (chosen === null || chosen === undefined){
                this.set('errormessage1', "Please Select Organisation");
                //this.toggleProperty('isShowingModals');
                //return;
            }
             if (Organisationname === null || Organisationname === undefined || Organisationname === "") {
                this.set('errormessage2', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (emailid === null || emailid === undefined || emailid === "") {
                this.set('errormessage3', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (fullname === null || fullname === undefined || fullname === "") {
                this.set('errormessage4', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (enterdesignation === null || enterdesignation === undefined || enterdesignation === "") {
                this.set('errormessage5', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (email2 === null || email2 === undefined || email2 === "") {
                this.set('errormessage6', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (phoneno === null || phoneno === undefined || phoneno === "") {
                this.set('errormessage7', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }
            if ((chosen === null || chosen === undefined) || 
                (Organisationname === null || Organisationname === undefined || Organisationname === "") || 
                (emailid === null || emailid === undefined || emailid === "") ||
                (fullname === null || fullname === undefined || fullname === "") ||
                (enterdesignation === null || enterdesignation === undefined || enterdesignation === "") ||
                (email2 === null || email2 === undefined || email2 === "") ||
                (phoneno === null || phoneno === undefined || phoneno === ""))
                {
                  this.toggleProperty('isShowingModals');  
                }
                else{
            this.toggleProperty('isShowingModal');
                }
        },

        register: function() {
            console.log("Test");
        },

        focusOutInput: function() {
            alert("Hello");
            this.set('errormessage1', '');
        },

        login: function(){
               this.transitionToRoute('login');
        }

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