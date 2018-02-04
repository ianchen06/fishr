// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.
import Tabular from 'meteor/aldeed:tabular';
import { Meteor } from 'meteor/meteor';
import { SalePrices } from '/imports/api/salePrices/salePrices.js';
import { AvgSalePrices } from '/imports/api/salePrices/salePrices.js';

new Tabular.Table({
  name: "Prices",
  collection: SalePrices,
  columns: [
    {data: "itemName", title: "itemName"},
    {data: "price", title: "price"},
  ]
});

new Tabular.Table({
  name: "AvgPrices",
  collection: AvgSalePrices,
  columns: [
    {data: "_id", title: "itemName"},
    {data: "avgPrice", title: "price"},
  ]
});
