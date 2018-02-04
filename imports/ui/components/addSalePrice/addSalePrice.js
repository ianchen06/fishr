import { Meteor } from 'meteor/meteor';
import './addSalePrice.html';
import { SalePrices } from '/imports/api/salePrices/salePrices.js';



Template.addSalePrice.onCreated(function () {
  Meteor.subscribe('salePrices.all');
});

Template.addSalePrice.helpers({
  selector() {
    return {userId: Meteor.userId()};
  },
});

Template.addSalePrice.events({
  'submit .sale-price-add'(event) {
    event.preventDefault();

    console.log("submit")

    const target = event.target;
    const price = target.price;
    const itemName = target.itemName;
    const location = target.location;

    Meteor.call('salePrices.insert', price.value, itemName.value, location.value,(error) => {
      if (error) {
        alert(error.error);
      } else {
        price.value = '';
        itemName.value = '';
        location.value = '';
      }
    });
    $("#sales_add_form").modal('hide');
  },
  'click .js-show-sales-form'(event){
    console.log("123");
    $("#sales_add_form").modal("show");
  }
});
