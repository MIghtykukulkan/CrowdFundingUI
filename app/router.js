import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
   location: config.locationType,
   rootURL: config.rootURL
});

Router.map(function() {
   this.route('home');
   this.route('login');
   this.route('sign-up');
   this.route('coming-soon');
   this.route('start-campaign');
   this.route('reward');
});

export default Router;

