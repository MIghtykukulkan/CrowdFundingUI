import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    campaigntitle: [
        validator('presence', true),
        validator('length', {
            max: 80,
        })
    ],

     shortdescription: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    beneficiaryname: [
        validator('presence', true),
        validator('format', {
            type: 'name'
        })
    ],

    goalamount: [
        validator('presence', true),
        validator('format', {
            regex:/[0-1-2-3-4-5-6-7-8-9-.]/,
            type: 'number'
        })
    ],

     rewardtitle: [
         validator('presence', true),
        validator('format', {
            regex: /^[A-Za-z/-/-_/ ]+$/
        })
    ],

    rewardamount: [
        validator('presence', true),
        validator('format', {
            regex:/[0-1-2-3-4-5-6-7-8-9-.]/,
            type: 'number'
        })
    ],

    rewarddescription: [
        validator('presence', true),
        validator('length', {
         max: 160,
    
        })
    ],
});

export default Ember.Controller.extend(Validations,{
    showStartResponse: false,
    isAddReward: false,
    isSaveReward: false,

    actions: {
        start: function(){
            this.set('showStartResponse', true);    
        },
        
        regOK: function() {
            var mycontroller = this;
            mycontroller.set('showRegResponse', false);
            mycontroller.transitionToRoute('fund-raiser');
        },

        dismissModal: function() {
            this.set('showStartResponse', false);
        },

        createCampaign: function() {
            
        },

        addRewards: function() {
            this.toggleProperty('isAddReward');
        },

        saveRewards: function() {
            var rewardtitle = this.get('rewardtitle');
            var rewardamount = this.get('rewardamount');
            var rewarddescription = this.get('rewarddescription');
            var deliveryDate = this.get('deliveryDate');
            
            if (rewardtitle === null || rewardtitle === undefined || rewardtitle === "") {
                this.set('rewardtitleerrormessage', "field cannot be empty")
                //return;
            }

            if (rewardamount === null || rewardamount === undefined || rewardamount === "") {
                this.set('rewardamounterrormessage', "field cannot be empty")
                //return;
            }

            if (rewarddescription === null || rewarddescription === undefined || rewarddescription === "") {
                this.set('rewarddescriptionerrormessage', "field cannot be empty")
                //return;
            }

            if (deliveryDate === null || deliveryDate === undefined || deliveryDate === "") {
                this.set('dateerrormessage', "Date field cannot be empty")
                return;
            }
            this.set('isAddReward', false);
            this.toggleProperty('isSaveReward');
        },
            toggleModal1: function() {
            var campaigntitle = this.get('campaigntitle');
            var content = this.get('content');
            var beneficiaryname = this.get('beneficiaryname');
            var contents = this.get('contents');
            var goalamount = this.get('goalamount');
            var contentss = this.get('contentss');
            if (campaigntitle === null || campaigntitle === undefined || campaigntitle === "") {
                this.set('errormessage1', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
               // return;
            }
             if (content === null || content === undefined || content === "") {
                this.set('errormessage2', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
               // return;
            }
            if (beneficiaryname === null || beneficiaryname === undefined || beneficiaryname === "") {
                this.set('errormessage3', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (contents === null || contents === undefined || contents === "") {
                this.set('errormessage4', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (goalamount === null || goalamount === undefined || goalamount === "") {
                this.set('errormessage5', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if (contentss === null || contentss === undefined || contentss === "") {
                this.set('errormessage6', "field cannot be empty")
                //this.toggleProperty('isShowingModal');
                //return;
            }
            if((campaigntitle === null || campaigntitle === undefined || campaigntitle === "") || 
                (content === null || content === undefined || content === "") ||
                (beneficiaryname === null || beneficiaryname === undefined || beneficiaryname === "") ||
                (contents === null || contents === undefined || contents === "")  ||
                (goalamount === null || goalamount === undefined || goalamount === "") ||
                (contentss === null || contentss === undefined || contentss === "")){
                    this.toggleProperty('isShowingModal');
                }
            else{
                    this.toggleProperty('isShowingModalss');
                }
         },

         home:function(){
             this.transitionToRoute('home');
         }
    }
    
     /*deliveryDate: Ember.computed(function () {
        let date = new Date();
        date.setDate(date.getDate() + 2);
        return date;
    })*/
});