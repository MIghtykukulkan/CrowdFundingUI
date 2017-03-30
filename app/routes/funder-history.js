import Ember from 'ember';

export default Ember.Route.extend({

    model(){
       
      //var data = [{"uid":uid,"fname":fname,"java":javascore,"language":languagescore,"fundamental":fundamentalscore}];

       var  data = [{"camp-name":"Eduction","contribution":"20000","status":"Received"},
       {"camp-name":"Film","contribution":"10000","status":"Received"},
       {"camp-name":"Dance","contribution":"30000","status":"Received"}
       ];
        return data;
    }

    

});
