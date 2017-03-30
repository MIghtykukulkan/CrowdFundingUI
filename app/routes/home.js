import Ember from 'ember';

var showAdmin = false;
var showFund = false;
export default Ember.Route.extend({
     
    model() {
        var userType = sessionStorage.getItem('userType');
        console.log("Home: " + userType);
        if (userType === "Admin") {
            showAdmin = true;
            this.controllerFor('home').set('showAdmin', showAdmin);
        }

        else  if (userType === "Fund") {
            showFund = true;
             this.controllerFor('home').set('showFund', showFund);
        }
    }
});