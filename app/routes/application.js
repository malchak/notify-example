import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		foo: function () {
			this.notify.success('Hello there!');
		}
	}
});
