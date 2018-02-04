import { SalePrices } from '/imports/api/salePrices/salePrices.js';
import { AvgSalePrices } from '/imports/api/salePrices/salePrices.js';
import { Meteor } from 'meteor/meteor';
import './priceChart.html';


Template.priceChart.onCreated(function () {
  Meteor.subscribe('salePrices.all');
});

Template.priceChart.helpers({
  currUserName: function () {
      return Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;
  },
  salePrices() {
    return SalePrices.find({});
  },
  chartTitle() {
    return Session.get('rowData')
  }
});

Template.priceChart.events({
  'click #lineChart'(event, param) {
    console.log("line event", param)
    $('#lineChart').highcharts().setTitle({text: Session.get('rowData')._id + ' 即時價格'})
  },
  'click .btn-primary': function () {
      Categories.insert({
          name: "Category",
          y: 24,
          color: "#ddddd"
      });
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

function buildChart() {
// Create the chart
  return window.Highcharts.stockChart('lineChart', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text:"價格"
    },

    exporting: {
        enabled: false
    },
    series: [{
        name: '售價（新台幣/公斤）',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 100)
                ]);
            }
            return data;
        }())
    }]
});


}

Template.priceChart.rendered = function() {
  let res = buildChart()
  res.setTitle({text: Session.get('rowData')._id + ' 即時價格'})
  //Session.set('chart', res)
}
