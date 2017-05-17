import Ember from 'ember';

export default Ember.Controller.extend({
    actions :
    {
        callRewards : function()
        {
            this.transitionToRoute('reward');
        },

        toggleModal : function()
        {
            var content = this.get('content');
            if (content === null || content === undefined || content === "") {
                this.set('errormessage', "you must have to enter some comments!!!!")
                return;
            }
            this.toggleProperty('isShowingModal');
            
        },
        submit:function(){
           window.location.reload(true); 
        }
    }
});
