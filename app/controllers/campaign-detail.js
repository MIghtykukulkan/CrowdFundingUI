import Ember from 'ember';

export default Ember.Controller.extend({
    actions :
    {
        callReward : function()
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
        }
    }
});
