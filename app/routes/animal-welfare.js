import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var campaigntitle = this.controllerFor('start-campaign').get('campaigntitle');
        var content = this.controllerFor('start-campaign').get('content');


        this.controllerFor('animal-welfare').set('campaigntitle', campaigntitle);
        this.controllerFor('animal-welfare').set('content', content);
       
    }
});
