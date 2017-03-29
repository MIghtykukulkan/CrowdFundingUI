import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
   location: config.locationType,
   rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
   this.route('home');
   this.route('login');
   this.route('sign-up');
   this.route('coming-soon');
   this.route('start-campaign');
   this.route('reward');
=======
  this.route('home');
  this.route('login');
  this.route('sign-up');
  this.route('coming-soon');
  this.route('start-campaign');
  this.route('fund-raiser');
>>>>>>> 0d2fc3b317064271bf07a6cae3b60a24cf525799
});

export default Router;

