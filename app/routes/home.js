import Ember from 'ember';

var showAdmin = false;
export default Ember.Route.extend({
     
    model() {
        var userType = sessionStorage.getItem('userType');
        if (userType === "Admin") {
            showAdmin = true;
            this.controllerFor('home').set('showAdmin', showAdmin);
        }
    }
});