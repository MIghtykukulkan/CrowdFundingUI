import Ember from 'ember';

var showStartCampaign = false;
export default Ember.Controller.extend({
    actions: {
        register: function() {
            this.transitionToRoute('signup');
        },

        login: function() {
            var goToStartCampaign = sessionStorage.getItem('goToStartCampaign');
            var emailId = this.get('email');

            if (emailId === 'admin' || emailId === 'Admin' || emailId === 'ADMIN') {
                sessionStorage.setItem('userType', "Admin");
                sessionStorage.setItem('showAdminHeaderModules', false);
            } else if (emailId === 'fundraiser' || emailId === 'Fundraiser' || emailId === 'FUNDRAISER') {
                showStartCampaign = true;
                sessionStorage.setItem('userType', "Fundraiser");
                sessionStorage.setItem('showAdminHeaderModules', true);
                sessionStorage.setItem('showStartCampaign', true);                
            } else if (emailId === 'funder' || emailId === 'Funder' || emailId === 'FUNDER') {
                sessionStorage.setItem('userType', "Funder");
                sessionStorage.setItem('showAdminHeaderModules', true);
                sessionStorage.setItem('showFunderModules', true);
                sessionStorage.setItem('showStartCampaign', false);
            } else if (emailId === 'customer' || emailId === 'Customer' || emailId === 'CUSTOMER') {
                sessionStorage.setItem('userType', "Customer");
                sessionStorage.setItem('showAdminHeaderModules', false);
            } 
            
            if (goToStartCampaign) {
                if (showStartCampaign)
                    this.transitionToRoute('start-campaign');
                else
                    sessionStorage.clear();
                    this.set('showValidation', true);

            } else {
                window.location.reload(true);
            }
        },

        dismissModal: function() {
            this.set('showValidation', false);
        }
    }
});