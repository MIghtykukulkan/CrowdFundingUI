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
<<<<<<< HEAD
  this.route('list-approve-bids');
=======
>>>>>>> 0d2fc3b317064271bf07a6cae3b60a24cf525799
>>>>>>> 2ff03cef3948930d694bedcb2c3621787bab9e22
});

export default Router;

