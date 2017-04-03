import Ember from 'ember';

export default Ember.Route.extend({
   model() {
      var userType = sessionStorage.getItem('userType');

      
    if(userType === undefined || userType === null)
            {
                this.transitionTo('login');
            }
            else {
                this.transitionTo('start-campaign');
            }
            
  }
});
