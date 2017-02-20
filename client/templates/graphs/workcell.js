

  var start= moment().format("2000-01-01 HH:mm:ss.SSS")
 Session.set("startgraph", start);
  var end= moment().format("2100-01-01 HH:mm:ss.SSS")
    Session.set("endgraph", end);


 Template.testgraphworkcell.events({
    
 
  'input #start': function (event, template) {




  var length=Number(event.currentTarget.value.length)
  var start=event.currentTarget.value
   var teststart= moment(event.currentTarget.value).format("YYYY-MM-DD")

   console.log("start in event" + start)
   console.log("this is the length of numbers "+ start.replace(/[^0-9]/g,"").length)
   length=length.replace(/[^0-9]/g,"").length
    if (length>7)
   {
  Session.set("startgraph", start);
  }
  
  },
  'input #end': function (event, template) {
   
  console.log("This is the entered name " + event.currentTarget.value)
  
  var length=Number(event.currentTarget.value.length)
        var end=event.currentTarget.value
    //var end= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")
     console.log("end in event" + end)
      if (length>7)
   {
    Session.set("endgraph", end);
  }
 
  },
  'input #workcenter': function (event, template) {
   
  console.log("This is the entered work center " + event.currentTarget.value)
 /* if (event.currentTarget.value.length>0)
  {
    var end= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")
    Session.set("endgraph", end);
  }*/
 
  }
 

});
Template.testgraphworkcell.topGenresChart = function() {

    //Here I need to have a server side fxn that  I call that returns
    //the average for permanent and another for temp

    console.log("This is the graph name " + Session.get("graphname"))
    console.log("this is the workcenter name " + Session.get("workcenterName"))
//based on the count I need to determine which data set to ship over to this graph
//
/*
Basically I will 

*/

var both=ReactiveMethod.call('averageworkcenter',Session.get("workcenterName"),Session.get("startgraph"),Session.get("endgraph"))
var shift1=both[0]
var shift2=both[1]
var shift3=both[2]


if (typeof shift1=="number"||typeof shift2=="number"||typeof shift3=="number")
{Session.set("loading",0)
    var datatest=[
                ['Shift1',  shift1],
                ['Shift2',   shift2],
                ['Shift3',   shift3]
              
               
            ]
    return {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 25,
                depth: 32,
                viewDistance: 40
            },
            style: {
                    color: 'black',
                    fontSize:'25px'
                }
        },
        title: {
            text: "Workcenter shift comparison"
        },
         xAxis: {
            categories: ['Shift 1', 'Shift 2','Shift 3'],
            labels: {
                style: {
                    color: 'black',
                    fontSize:'25px'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Productivity'
            },
            labels: {
                 formatter: function () {
                    return this.value + '%';
                },
                style: {
                    color: 'black',
                    fontSize:'25px'
                }
            },
            stackLabels: {
                enabled: true,
                align: 'center',
                formatter: function () {
                    return this.y + '%';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{this.y}</b> %',
            shared: true
        },
        plotOptions: {
            column: {
                depth: 25
            },
         series: {
                dataLabels: {
                    align: 'center',
                    enabled: true,
                    rotation: 0,
                    x: 2,
                    y: -10,
                    formatter: function () {
                       
                            return this.y + '%';
                       // return Highcharts.numberFormat(this.y,1);
                   
                }
                },

            }
        },
        series: [{
            color: '#7c4dff',
            data: datatest
        }]




    };

function showValues() {
        $('#alpha-value').html(chart.options.chart.options3d.alpha);
        $('#beta-value').html(chart.options.chart.options3d.beta);
        $('#depth-value').html(chart.options.chart.options3d.depth);
    }
        showValues();
        
    }
    else
    {
        Session.set("loading",1)
    }
};



Template.testgraphworkcell.rendered = function(){
     


};

Template.testgraphworkcell.helpers({
    timeframe: function () {
/*
So here I need to show the user the time frame this is going on
I need to grab the earliest entry timestamp so the first one
and the last entry time stamp

*/
/*
I'll need to contact a meteor method

*/


}
})