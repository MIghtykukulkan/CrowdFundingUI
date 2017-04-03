import Ember from 'ember';

var showAdmin, showFund, showFunder = false;
export default Ember.Route.extend({

    model() {
        var userType = sessionStorage.getItem('userType');

        if (userType === "Admin") {
            showAdmin = true;
            this.controllerFor('home').set('showAdmin', showAdmin);
            this.controllerFor('application').set('showAdminHeaderModules', false);
        } else if (userType === "Fund") {
            showFund = true;
            this.controllerFor('home').set('showFund', showFund);
        } else if (userType === "Funder") {
            showFunder = true;
            this.controllerFor('home').set('showFunder', showFunder);
        }
              
    }
});