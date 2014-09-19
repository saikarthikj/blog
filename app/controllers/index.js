import Ember from 'ember';

export default Ember.Controller.extend({
	ps:[],
	title:'',
	subject:'',
	actions:{
		postsubmit:function(){
			var s=this.get('title');
			var t = Ember.$('#subject').val();
			this.get('ps').pushObject({
			  title: s,
			  subject:t 
			});
			
			this.transitionToRoute('show',this.get('ps'));
		}
	}
});
