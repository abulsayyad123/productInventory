import Service from '@ember/service';
import Product from '../models/product';
import LineItem from '../models/line-item';
import Order from '../models/order';
export default Service.extend({
	getOrderById(id){
		const orders = this.getOrders();
		return orders.findBy('id', id);
	},

	getOrders(){
		return [
			{id:1, name:'Jane'},
			{id:2, name:'John'} 
		];
	}
});
