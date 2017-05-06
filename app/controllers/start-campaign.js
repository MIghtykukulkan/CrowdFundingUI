import Ember from 'ember';
import {
    validator,
    buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    campaigntitle: [
        validator('presence', true),
        validator('length', {
            min:50,
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
         min: 160,
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
                return;
            }

             if (rewardamount === null || rewardamount === undefined || rewardamount === "") {
                this.set('rewardamounterrormessage', "field cannot be empty")
                return;
            }

             if (rewarddescription === null || rewarddescription === undefined || rewarddescription === "") {
                this.set('rewarddescriptionerrormessage', "field cannot be empty")
                return;
            }

            if (deliveryDate === null || deliveryDate === undefined || deliveryDate === "") {
                this.set('dateerrormessage', "Date field cannot be empty")
                return;
            }
            this.set('isAddReward', false);
            this.toggleProperty('isSaveReward');
        }
     },
    
     /*deliveryDate: Ember.computed(function () {
        let date = new Date();
        date.setDate(date.getDate() + 2);
        return date;
    })*/
});