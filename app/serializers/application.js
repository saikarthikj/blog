import DS from 'ember-data';
import Ember from 'ember';
export default DS.RESTSerializer.extend({
	extractArray: function(store, type, payload,id,requestType) {
  		var newPayload = {};
  		newPayload[Ember.String.pluralize(type.typeKey)] = payload;
  		return this._super(store,type,newPayload,id,requestType);
  	}
});
