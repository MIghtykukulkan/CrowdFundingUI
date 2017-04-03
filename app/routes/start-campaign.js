import Ember from 'ember';

export default Ember.Route.extend({
   model() {
       var userType = sessionStorage.getItem('userType');

       if (userType === undefined || userType === null) {
           sessionStorage.setItem('goToStartCampaign', true);
           this.transitionTo('login');
       } else {
           this.controllerFor('application').set('userType', userType);
           this.controllerFor('application').set('showUser', true);
       }
   }
});
