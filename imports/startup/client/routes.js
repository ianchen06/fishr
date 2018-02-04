import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/price/price.js';
import '../../ui/pages/mysale/mysale.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/price', {
  name: 'App.price',
  action() {
    BlazeLayout.render('App_body', { main: 'App_price' });
  },
});

FlowRouter.route('/mysale', {
  name: 'App.mysale',
  action() {
    BlazeLayout.render('App_body', { main: 'App_mysale' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
