import Ember from 'ember';

export default Ember.Route.extend({

	actions: {

		getInfo: function () {
			this.notify.info('This is and ember-notify message');
		},

		clickMe: function () {
			this.notify.success('Hello there!');
		},

		doNotClickMe: function () {
			this.notify.warning('Great... now you\'ve done it.');
		},

		somthingBad: function () {
			this.notify.alert('You better go double check your account balance.');
		}
	}

});
