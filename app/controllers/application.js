import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        logout: function() {
            sessionStorage.clear();
            window.location.reload(true);
        }
    }
});