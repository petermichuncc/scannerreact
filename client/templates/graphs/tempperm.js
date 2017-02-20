
  var start= moment().format("2000-01-01 HH:mm:ss.SSS")
 Session.set("startgraph", start);
  var end= moment().format("2100-01-01 HH:mm:ss.SSS")
    Session.set("endgraph", end);

 Template.testgraphnew.events({
    
 
   'input #start': function (event, template) {




  var length=event.currentTarget.value.length
  length=length.toString()
  var start=event.currentTarget.value
   //var start= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")
   console.log("start in event" + start)
    console.log("this is the start length before replace " + length)
    var startnew=start.replace(/[^0-9]/g, '');
        length=startnew.length
      length=Number(length)
      console.log("this is the start after replace " + startnew)
      console.log("this is the start length after replace " + length)
    if (length>7)
   {

  Session.set("startgraph", start);
  console.log("this is the start graph "+ Session.get("startgraph"))
  }

  },
  'input #end': function (event, template) {
   
  console.log("This is the entered name " + event.currentTarget.value)
  
  var length=event.currentTarget.value.length
  length=length.toString()
        var end=event.currentTarget.value
     console.log("this is the end length before replace " + length)
    var endnew=end.replace(/[^0-9]/g, '');
        length=endnew.length
      length=Number(length)
      console.log("this is the end after replace " + endnew)
      console.log("this is the end length after replace " + length)
      if (length>7)
   {
    Session.set("endgraph", end);
    console.log("this is the end graph "+ Session.get("endgraph"))
  }
 
  }
 

});
Template.testgraphnew.topGenresChart = function() {

	//Here I need to have a server side fxn that  I call that returns
	//the average for permanent and another for temp

    console.log("This is the graph name " + Session.get("graphname"))
//based on the count I need to determine which data set to ship over to this graph
//
//So I need to ship in start and end times from the input boxes
var both=ReactiveMethod.call('average',Session.get("department1"),Session.get("startgraph"),Session.get("endgraph"))
var temp=both[0]
var permanent=both[1]

//var temp=ReactiveMethod.call('tempaverage')
//var permanent=ReactiveMethod.call('permanentaverage')
if (typeof permanent=="number")
{Session.set("loading",0)
	var datatest=[
                ['Temp',  temp],
                ['Permanent',       permanent]
              
               
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
            text: Session.get("graphname")
        },
         xAxis: {
            categories: ['Temp', 'Permanent'],
            labels: {
                style: {
                    color: 'black',
                    fontSize:'25px'
                }
            }
        },
        scrollbar: {
            enabled: true
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
                    fontSize:'15px'
                }
            },
            stackLabels: {
                enabled: false,
                align: 'center',
                formatter: function () {
                    return this.y + '%';
                }
            }
        },
        
        plotOptions: {
            column: {
                depth: 25
            },
         series: {

                
                dataLabels: {
                    align: 'center',
                    enabled: false,
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



Template.testgraphnew.rendered = function(){
	 


};

Template.first.helpers({
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


