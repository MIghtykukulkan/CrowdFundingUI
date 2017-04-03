import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        register: function() {
            this.transitionToRoute('sign-up');
        },

        login: function() {
            var goToStartCampaign = sessionStorage.getItem('goToStartCampaign');
            var emailId = this.get('email');

            if (emailId === 'admin' || emailId === 'Admin' || emailId === 'ADMIN') {
                sessionStorage.setItem('userType', "Admin");
                sessionStorage.setItem('showAdminHeaderModules', false);
            } else if (emailId === 'fund' || emailId === 'Fund' || emailId === 'FUND') {
                sessionStorage.setItem('userType', "Fund");
                sessionStorage.setItem('showAdminHeaderModules', true);                
            } else if (emailId === 'funder' || emailId === 'Funder' || emailId === 'FUNDER') {
                sessionStorage.setItem('userType', "Funder");
                sessionStorage.setItem('showAdminHeaderModules', true);
            } else if (emailId === 'customer' || emailId === 'Customer' || emailId === 'CUSTOMER') {
                sessionStorage.setItem('userType', "Customer");
                sessionStorage.setItem('showAdminHeaderModules', false);
            } 
            
            if (goToStartCampaign) {
                this.transitionToRoute('start-campaign');
            } else {
                window.location.reload(true);
            }
        }
    }
});