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

    phonenumber: [
        validator('presence', true),
        validator('format', {
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        })
    ],

    password: [
      validator('presence', true),
      validator('length', {
        min: 4,
        max: 10
      }),
      validator('format', {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,
        message: '{description} must include at least one upper case letter, one lower case letter, and a number'
      }),
      validator('length', {
        isWarning: true,
        min: 6,
        message: 'What kind of weak password is that?'
      })
    ],

    confirmpassword :[
         validator('confirmation', {
    on: 'password',
    message: 'password do not match'
  })
],

   documentdetail: [
        validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z-1-9-0/-/. ]+$/,
            message: ''
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

    phonenumbers: [
        validator('presence', true),
        validator('format', {
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        })
    ],

    panno: [
        validator('presence', true),
        validator('format', {
            regex: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
            message: 'invalid pan card number' 
        })
    ],

    passwords: [
      validator('presence', true),
      validator('length', {
        min: 4,
        max: 10
      }),
      validator('format', {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,
        message: '{description} must include at least one upper case letter, one lower case letter, and a number'
      }),
      validator('length', {
        isWarning: true,
        min: 6,
        message: 'What kind of weak password is that?'
      })
    ],

    confirmpasswords:[
         validator('confirmation', {
    on: 'passwords',
    message: 'password do not match'
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
    documenttype: ['Passport', 'PAN No', 'Aadhar No',],
     usertype: ['Funder', 'Fundraiser',],
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
            var usertype = this.get('usertype');
            var name = this.get('name');
            var email = this.get('email');
            var phonenumber = this.get('phonenumber');
            var password = this.get('password');
            var confirmpassword = this.get('confirmpassword');
            var chosen = this.get('selectedtypes');
            var documentdetail = this.get('documentdetail');

             if (usertype === null || usertype === undefined || usertype === ""){
                this.set('nameerror', "field cannot be empty")
                //return;
            }if (name === null || name === undefined || name === ""){
                this.set('nameerror', "field cannot be empty")
                //return;
            } if (email === null || email === undefined || email === "") {
                this.set('emailerror', "field cannot be empty")
                //return;
            } if (phonenumber === null || phonenumber === undefined || phonenumber === "") {
                this.set('phonenumbererror', "field cannot be empty")
                //return;
            } if (password === null || password === undefined || password === "") {
                this.set('passworderror', "field cannot be empty")
                //return;
            } if (confirmpassword === null || confirmpassword === undefined || confirmpassword === "") {
                this.set('confirmpassworderror', "field cannot be empty")
                //return;
            } if (chosen === null || chosen === undefined) {
                this.set('documenttypeerror', "field cannot be empty")
                //return;
            } if (documentdetail === null || documentdetail === undefined || documentdetail === "") {
                this.set('documentdetailerror', "field cannot be empty")
                //return;
            }
             if ((usertype === null || usertype === undefined || usertype === "")||
                (name === null || name === undefined || name === "") || 
                (email === null || email === undefined || email === "") || 
                (phonenumber === null || phonenumber === undefined || phonenumber === "") ||
                (password === null || password === undefined || password === "") ||
                (confirmpassword === null || confirmpassword === undefined || confirmpassword === "") ||
                (chosen === null || chosen === undefined) ||
                (documentdetail === null || documentdetail === undefined || documentdetail === ""))
                {
                  this.toggleProperty('isShowingModals');  
                }
                else{
                     let {
               selectedtype,          
               name,
               email,
               phonenumber,
               password,
               confirmpassword,
               selectedtypes,
               documentdetail,
               facebook,
               blog,
               websiteurl,
               youtube
           } = this.getProperties('selectedtype','name', 'email', 'phonenumber', 'password','confirmpassword','selectedtypes','documentdetail','facebook','blog','websiteurl','youtube');

           var dataString = {
               "usertype":selectedtype,
               "name": name,
               "email": email,
               "phone": phonenumber,
               "password": password,
               "repassword": confirmpassword,
               "doctype": documentdetail,
               "facebook":facebook,
               "blog":blog,
               "websiteurl":websiteurl,
               "youtube":youtube,
               "org":"org",
              /* "organisationname":"",
               "organisationemail":"",
               "organisationphoneno":"",
               "organisationtype":"",*/
               "designation":"designation"
           };
          
            //alert('YOU ARE SUCCESSFULLY REGISTERED');
            //this.toggleProperty('isShowingModal');
           // this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            var message;
            console.log("Registration Input: " + JSON.stringify(dataString));
            return $.ajax({
            url:'http://192.168.0.24:3010/registeruser',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dataString),
            success: function(response) {
                   console.log(JSON.stringify(response));
                   message=response.message.message;
                     console.log(response.message);
                     mycontroller.set('uid',uid);
                    // mycontroller.set('message',message);
                  // mycontroller.toggleProperty('showRegResponse');
                     mycontroller.toggleProperty('isShowingModalsss');
                  // mycontroller.set('loading_image_visibility', "hide");
                 //  mycontroller.transitionToRoute('home');              
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });
    
                }
        },


         toggleModal1: function() { 
            var organisationtype = this.get('selectedtype1');
            console.log('Organisationtype'+organisationtype)
            var name = this.get('name');
            var email = this.get('email');
            var phonenumber = this.get('phonenumber');
            var password = this.get('password');
            var confirmpassword = this.get('confirmpassword');
            var documenttype = this.get('selectedtypes1');
            console.log('documenttype'+documenttype);
            var documentdetail = this.get('documentdetail');
            var designation = this.get('desaination');
            /*var usertype = this.get('usertype');
            var name = this.get('name');
            var email = this.get('email');
            var phonenumber = this.get('phonenumber');
            var password = this.get('password');
            var confirmpassword = this.get('confirmpassword');
            var chosen = this.get('selectedtypes');
            var documentdetail = this.get('documentdetail');
            var name1 = this.get('name1');
            var email1 = this.get('email1');
            var phonenumber1 = this.get('phonenumber1');
            var designation = this.get ('designation');
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
            } 
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
            }  if (phonenumbers === null || phonenumbers === undefined || phonenumbers === "") {
                this.set('phonenumberserror', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (panno === null || panno === undefined || panno === "") {
                this.set('pannoerror', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (passwords === null || passwords === undefined || passwords === "") {
                this.set('passwordserror', "This field cannot be blank")
                //this.toggleProperty('isShowingModals');
                //return;
            }  if (confirmpasswords === null || confirmpasswords === undefined || confirmpasswords === "") {
                this.set('confirmpasswordserror', "This field cannot be blank")
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
                (phonenumbers === null || phonenumbers === undefined || phonenumbers === "") ||
                (panno === null || panno === undefined || panno === "") ||
                (passwords === null || passwords === undefined || passwords === "") ||
                (confirmpasswords === null || confirmpasswords === undefined || confirmpasswords === "") ||
                (fullname === null || fullname === undefined || fullname === "") ||
                (enterdesignation === null || enterdesignation === undefined || enterdesignation === "") ||
                (email2 === null || email2 === undefined || email2 === "") ||
                (phoneno === null || phoneno === undefined || phoneno === ""))
                {
                  this.toggleProperty('isShowingModals');  
                }
                else{
                        let {
               selectedtype,
               name,
               email,
               phonenumber,
               password,
               confirmpassword,
               documentdetail,
               facebook,
               blog,
               websiteurl,
               youtube,
               name1,
               email1,
               phonenumber1,
               designation,
           } = this.getProperties('selectedtype', 'name', 'email', 'phonenumber','password', 'confirmpassword','documentdetail','facebook','blog','websiteurl','youtube','name1','email1','phonenumber1','designation');
               
           var dataString = {
               "usertype":selectedtype,
               "name": name,
               "email": email,
               "phone": phonenumber,
               "password": password,
               "repassword": confirmpassword,
               "doctype": documentdetail,
               "facebook":facebook,
               "blog":blog,
               "websiteurl":websiteurl,
               "youtube":youtube,
               "org":"org",
               "name":name1,
               "email":email,
               "phone":phonenumber1,
               "designation":designation,
           };*/
            if (organisationtype === null || organisationtype === undefined || organisationtype === ""){
                this.set('nameerror', "field cannot be empty")
                //return;
            }if (name === null || name === undefined || name === ""){
                this.set('nameerror', "field cannot be empty")
                //return;
            } if (email === null || email === undefined || email === "") {
                this.set('emailerror', "field cannot be empty")
                //return;
            } if (phonenumber === null || phonenumber === undefined || phonenumber === "") {
                this.set('phonenumbererror', "field cannot be empty")
                //return;
            } if (password === null || password === undefined || password === "") {
                this.set('passworderror', "field cannot be empty")
                //return;
            } if (confirmpassword === null || confirmpassword === undefined || confirmpassword === "") {
                this.set('confirmpassworderror', "field cannot be empty")
                //return;
            } if (documenttype === null || documenttype === undefined) {
                this.set('documenttypeerror', "field cannot be empty")
                //return;
            } if (documentdetail === null || documentdetail === undefined || documentdetail === "") {
                this.set('documentdetailerror', "field cannot be empty")
                //return;
            } if (designation == null || designation == undefined || designation == ""){
                this.set('designationerror', "fields cannot be empty")
            }
             if ((organisationtype === null ||organisationtype === undefined || organisationtype === "")||
                (name === null || name === undefined || name === "") || 
                (email === null || email === undefined || email === "") || 
                (phonenumber === null || phonenumber === undefined || phonenumber === "") ||
                (password === null || password === undefined || password === "") ||
                (confirmpassword === null || confirmpassword === undefined || confirmpassword === "") ||
                (documenttype === null || documenttype === undefined) ||
                (documentdetail === null || documentdetail === undefined || documentdetail === "")
                (designation === null || designation === undefined || designation === ""))
                {
                  this.toggleProperty('isShowingModals');  
                }
                else{
                     let {
               selectedtype1,          
               name,
               email,
               phonenumber,
               password,
               confirmpassword,
               selectedtypes1,
               documentdetail,
               facebook,
               blog,
               websiteurl,
               youtube,
               designation,
               name1,
               designation1,
               email1,
               phonenumber1
           } = this.getProperties('organisationtype','name', 'email', 'phonenumber', 'password','confirmpassword','documenttype','documentdetail','facebook','blog','websiteurl','youtube','designation','name1','designation1','email1','phonenumber1');

           var dataString = {
               "organisationtype":selectedtype1,
               "name": name,
               "email": email,
               "phone": phonenumber,
               "password": password,
               "repassword": confirmpassword,
               "doctype": selectedtypes1,
               "facebook":facebook,
               "blog":blog,
               "websiteurl":websiteurl,
               "youtube":youtube,
               //"org":"org",
              /* "organisationname":"",
               "organisationemail":"",
               "organisationphoneno":"",
               "organisationtype":"",*/
               "designation":designation,
               "name":name1,
               "designation":designation1,
               "email":email1,
               "phone":phonenumber1
           };
                
          console.log(dataString);
           
            //alert('YOU ARE SUCCESSFULLY REGISTERED');
            //this.toggleProperty('isShowingModal');
            //this.set('loading_image_visibility', "show");
            var mycontroller = this;
            var uid;
            var message;
            console.log("Registration Input: " + JSON.stringify(dataString));
            return $.ajax({
            url: 'http://192.168.0.24:3010/registeruser',
            type: 'POST',
            accepts: 'application/json',
            data: dataString,
            success: function(response) {
                   console.log(JSON.stringify(response));
                   message=response.message.message;
                     console.log(response.message);
                   //mycontroller.set('uid',uid);
                   //mycontroller.set('message',message);
                   //mycontroller.toggleProperty('showRegResponse');
                   mycontroller.toggleProperty('isShowingModalss');
                   //mycontroller.set('loading_image_visibility', "hide");
                   //mycontroller.transitionToRoute('home');              
                  
            },
            error: function(result) {
                   console.log('DEBUG: GET Enquiries Failed');
            }
           });

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
               window.location.reload(true);
        },


        login1: function(){
               window.location.reload(true);
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