import Ember from 'ember';

import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    otp:[
        validator('presence', true),
        validator('format', {
            regex:/^[0-9]+$/,
            type: 'number'
        })
    ],
})

export default Ember.Controller.extend(Validations,{

    actions: {

        toggleModal:function(){
            var emailId = this.get('email');
            if (emailId === null || emailId === undefined || emailId === "") {
                this.set('errormessage', "Please fill in at least one field")
                return;
            }
          /*  let {
                email,
                
            } = this.getProperties('email');
               
               var dataString = {
                "email": email,
            };
               
            return $.ajax({
                url:'http://192.168.0.20:8000',
                type: 'POST',
                data: JSON.stringify(dataString),
                success: function(response) {
                    var message = response.message;
                    var status = response.status;
                    if (status === "success") {
                        console.log(JSON.stringify(response));
                    }
                },    
                    error: function(result) {
                    console.log('DEBUG: GET Enquiries Failed');
                }
                });*/

            
              this.toggleProperty('isShowingModal');
        },
        resetpassword:function(){
              this.transitionToRoute('reset-password');
        }
    }
});
