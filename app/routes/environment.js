import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var campaigntitle = this.controllerFor('start-campaign').get('campaigntitle');
        var content = this.controllerFor('start-campaign').get('content');


        this.controllerFor('environment').set('campaigntitle', campaigntitle);
        this.controllerFor('environment').set('content', content);
       
    }
});