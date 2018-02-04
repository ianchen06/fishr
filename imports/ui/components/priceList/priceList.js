import { SalePrices } from '/imports/api/salePrices/salePrices.js';
import { AvgSalePrices } from '/imports/api/salePrices/salePrices.js';
import { Meteor } from 'meteor/meteor';
import './priceList.html';


Template.priceList.onCreated(function () {
  Meteor.subscribe('salePrices.all');
  Meteor.subscribe("salePrices.avg");
});

Template.priceList.helpers({
  salePrices() {
    return SalePrices.find({});
  },
});

Template.priceList.events({
  'click tbody > tr': function (event) {
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    if (!rowData) return; // Won't be data if a placeholder row is clicked
    // Your click handler logic here
    console.log("clicked", rowData)
    Session.set("rowData", rowData);
    $('#lineChart').trigger('click', rowData)
  },
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
