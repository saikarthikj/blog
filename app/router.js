import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BlogENV.locationType
});

Router.map(function() {
	this.resource('show',{path:'show/:title'});
});

export default Router;
