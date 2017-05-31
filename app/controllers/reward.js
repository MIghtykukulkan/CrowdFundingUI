import Ember from 'ember';
var total = 0;
export default Ember.Controller.extend({
    isShowingHelp: false,
    isShowingModal: false,

    actions: {

         toggleModal: function() {

             this.toggleProperty('isShowingModal'); 
         },

         toggleModal1: function() {

             this.toggleProperty('isShowingModals'); 
         },
         toggleModal2: function() {

             this.toggleProperty('isShowingModalss'); 
         },
          toggleModal3: function() {

             this.toggleProperty('isShowingModalsss'); 
         },
          toggleModal4: function() {

             this.toggleProperty('isShowingModalssss'); 
         },
          toggleModal5: function() {

             this.toggleProperty('isShowingModalsssss'); 
         },
        agreement: function() {
            this.transitionToRoute('agreement');
        },
        norewardSelection: function(arg, arg1) {
            var amount = this.get('amount');
            if (amount === null || amount === undefined || amount === "") {
                this.set('amounterrormessage', "field cannot be empty")
                return;
            }
            var amount = arg;
            var reward = arg1;
            console.log(amount);
            this.set('message', "You have not selected any rewards and you want to contribute Rs "+ amount +" and You will get "+ reward +" reward. Do you want to continue?");
           
        },

        rewardSelection: function(arg, arg1) {
            var amount = arg;
            var reward = arg1;
            this.set('message', "You have selected Rs. " + amount + " and You will get " + reward + " reward. Do you want to continue?");
            console.log("display");

        },
        addtocart : function(){
            var quantity = this.get("quantity");
            var amt = 1000* quantity;
            total =total + amt;
            console.log(total);
            var jsonvariable =Ember.$.getJSON("reward.json");
            console.log(jsonvariable);
                 console.log(JSON.stringify(jsonvariable));
        this.toggleProperty('isShowingModals'); 
            },
        
        payment: function() {
             alert("Do not Refresh the page....");
            window.location.replace("https://www.billdesk.com/savepgi/");
        },

        showHelp: function() {
            this.toggleProperty('isShowingHelp');
        }
    }
});