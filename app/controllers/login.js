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
                window.location.reload(true);
            }
        }
    }
});