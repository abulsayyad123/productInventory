import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('orders', {path: '/orders'}, function(){
    	this.route('order', {path: '/:order_id'});	
    });
    
});

export default Router;
