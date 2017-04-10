import Ember from 'ember';

var showHelpPopUp = false;
export default Ember.Controller.extend({
    isShowingModel: false,

    actions: {
        logout: function() {
            sessionStorage.clear();
            window.location.reload(true);
        },
        
        goTo: function(arg) {
            if (arg === "education")
                this.transitionToRoute('education');
            else if (arg === 'children')
                this.transitionToRoute('children');
            else if (arg === 'animal-welfare')
                this.transitionToRoute('animal-welfare');
            else if (arg === 'environment')
                this.transitionToRoute('environment');
            else if (arg === 'film')
                this.transitionToRoute('film');
            else if (arg === 'dance')
                this.transitionToRoute('dance');
        },

        toggleModel: function() {
            this.toggleProperty('isShowingModel');
        }
    }
});