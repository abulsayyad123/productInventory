import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		const id = params.order_id;
		const store = this.get('store');
		return store.getOrderById(id);
	},

	store: Ember.inject.service('store')
});
