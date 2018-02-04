// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SalePrices } from './salePrices.js';

Meteor.methods({
  'salePrices.insert'(price, itemName, location) {
    price = parseInt(price)
    check(price, Number);
    check(itemName, String);
    check(location, String);

    return SalePrices.insert({
      price,
      itemName,
      location,
      userId: Meteor.userId(),
      createdAt: new Date(),
    });
  },
});
