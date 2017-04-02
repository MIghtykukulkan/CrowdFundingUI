import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var userType = sessionStorage.getItem('userType');
        var adminHeader = sessionStorage.getItem('showAdminHeaderModules');
        
        if (userType === null || userType === undefined) {
            this.controllerFor('application').set('userType', "Login");
            this.controllerFor('application').set('showUser', false);
            this.controllerFor('application').set('showAdminHeaderModules', true);
        } else {
            this.controllerFor('application').set('userType', userType);
            this.controllerFor('application').set('showUser', true);
            this.controllerFor('application').set('showAdminHeaderModules', adminHeader);
        }
        this.transitionTo('home');
    }
});