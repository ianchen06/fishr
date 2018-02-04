// All links-related publications

import { Meteor } from 'meteor/meteor';
import { SalePrices } from '../salePrices.js';
import { AvgSalePrices } from '../salePrices.js';

Meteor.publish('salePrices.all', function () {
  console.log("userid", Meteor.userId())
  return SalePrices.find({userId: Meteor.userId()});
});

Meteor.publish('salePrices.avg', function () {
  this.autorun(function () {
    let data1 = SalePrices.find().fetch()
    var pipeline = [
      {$group: {_id: "$itemName", avgPrice: {$avg: "$price"}}}
    ];
    let result = SalePrices.aggregate(pipeline);
    console.log(result)
    result.forEach((x)=>{
      console.log("Updating", x)
      AvgSalePrices.upsert({_id: x._id}, x)
    })
    
    return AvgSalePrices.find()
  });
});
