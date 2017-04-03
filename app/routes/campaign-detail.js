import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        var message = sessionStorage.getItem('imgURL');
        console.log("message" + message);
        var message1 = sessionStorage.getItem('category');
        console.log("message1" + message1);
        var message2 = sessionStorage.getItem('c_title');
        console.log("message2" + message2);

        // var message = this.controllerFor('browse').get('imgURL');


        //this.controllerFor('campaign-detail').set('imgURL', message);
        //this.set('imgURL',message);
        this.controllerFor('campaign-detail').set('imgURL', message);
        this.controllerFor('campaign-detail').set('category', message1);
        this.controllerFor('campaign-detail').set('c_title', message2);
    }

});