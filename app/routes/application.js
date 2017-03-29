import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var userType = sessionStorage.getItem('userType');

        if (userType === null || userType === undefined) {
            this.controllerFor('application').set('userType', "Login");
            this.controllerFor('application').set('showUser', false);
        } else {
            this.controllerFor('application').set('userType', userType);
            this.controllerFor('application').set('showUser', true);
        }
        this.transitionTo('home');
    }
});