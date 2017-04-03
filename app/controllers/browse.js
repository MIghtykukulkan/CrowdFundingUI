import Ember from 'ember';

export default Ember.Controller.extend({
    myprop: "sweta",
    myprop1: null,
    education: true,


    actions: {
        campaignDetails: function(arg, arg1, arg2) {
            var imgURL = arg;
            var category = arg1;
            var c_title = arg2;
            sessionStorage.setItem('imgURL', arg);
            sessionStorage.setItem('category', arg1);
            sessionStorage.setItem('c_title', arg2);
            //console.log('IMG: '+ arg);
            console.log(imgURL);
            console.log(category);
            console.log(c_title);
            this.transitionToRoute('campaign-detail');
        }
    }

});