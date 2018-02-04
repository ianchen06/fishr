// Definition of the links collection

import { Mongo } from 'meteor/mongo';

export const SalePrices = new Mongo.Collection('salePrices');
export const AvgSalePrices = new Mongo.Collection('avgSalePrices');

