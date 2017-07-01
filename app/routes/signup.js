import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var organisationtype = this.controllerFor('signup').set('selectedtype1');
        var documenttype = this.controllerFor('signup').set('selectedtypes1');
        console.log(organisationtype);
        
        
    }
});
       
