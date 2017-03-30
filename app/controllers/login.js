import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        register: function() {
            this.transitionToRoute('sign-up');
        },

        login: function() {
            var emailId = this.get('email');
            var password = this.get('password');

            if (emailId === 'admin' || emailId === 'Admin' || emailId === 'ADMIN') {
                sessionStorage.setItem('userType', "Admin");
            } else if (emailId === 'fund' || emailId === 'Fund' || emailId === 'FUND') {
                sessionStorage.setItem('userType', "Fund");
            } else if (emailId === 'funder' || emailId === 'Funder' || emailId === 'FUNDER') {
                sessionStorage.setItem('userType', "Funder");
            }
            
            window.location.reload(true);
        }
    }
});