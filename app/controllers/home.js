import Ember from 'ember';

export default Ember.Controller.extend({
        education : true, 
        
actions: {

           campaignDetails: function(arg, arg1, arg2, arg3) {
            var imgURL = arg;
            var desc = arg1;
            var c_title = arg2;
            var createdby = arg3;
            sessionStorage.setItem('imgURL', arg);
            sessionStorage.setItem('desc', arg1);
            sessionStorage.setItem('c_title', arg2);
            sessionStorage.setItem('createdby', arg3);
            this.transitionToRoute('campaign-detail');
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
        }  ,

        truncateText:function(text, maxLength) {
            var ret = text;
            var retLen=ret.length;
            if (retLen > maxLength)
            {
            ret = (ret.substr(0,maxLength)) + "...";
            }
            return ret;
            },

}
});