

 Session.set("department2","datacom")

var start= moment().format("2000-01-01 HH:mm:ss.SSS")
 Session.set("startgraph", start);
  var end= moment().format("2100-01-01 HH:mm:ss.SSS")
    Session.set("endgraph", end);


 Template.opaverageworkcell.events({
    
 
  'input #start': function (event, template) {




  var length=event.currentTarget.value.length
  length=length.toString()
  var start=event.currentTarget.value
   //var start= moment(event.currentTarget.value).format("YYYY-MM-DD HH:mm:ss.SSS")

    var startnew=start.replace(/[^0-9]/g, '');
        length=startnew.length
      length=Number(length)
    
    if (length>7)
   {

  Session.set("startgraph", start);

  }

  },
  'input #end': function (event, template) {
   
  console.log("This is the entered name " + event.currentTarget.value)
  
  var length=event.currentTarget.value.length
  length=length.toString()
        var end=event.currentTarget.value
    
    var endnew=end.replace(/[^0-9]/g, '');
        length=endnew.length
      length=Number(length)
    
      if (length>7)
   {
    Session.set("endgraph", end);
   
  }
 
  },
 

  "submit .testform": function(event){
 event.defaultPrevented;
 

console.log("submitted test form ")

return false;
},

'click .99': function(event, template){




 var start = $( "#start" ).val()
  var end =$( "#end" ).val()








}
 

});
/*
Add a select button and then change the vales of startgraph and endgraph based on the submitted
values in the inputs.
Or remove session variables from the reactive method

*/






 
Template.opaverageworkcell.topGenresChart = function() {

    //Here I need to have a server side fxn that  I call that returns
    //the average for permanent and another for temp

  

//based on the count I need to determine which data set to ship over to this graph
//
/*
Basically I will 

*/
//I need to grab a average for every work center

/*
var both=ReactiveMethod.call('average',Session.get("department1"))
var temp=both[0]
var permanent=both[1]
*/

var datatest=ReactiveMethod.call('averageopworkcenter',Session.get("operator"),Session.get("startgraph"),Session.get("endgraph"))
 
console.log("this is typeof dataset "+ typeof datatest)
console.log("this is the data test length " + datatest.length)


/*
Dataset should be all the work centers associated with a particular department
I'll need to make a reactive method that calls the server to find an array of arrays that
holds all the work centers with a particular department.

*/

var testarray=[]
for (var i=0; i<datatest.length;i++)
{
    testarray[i]=datatest[i][0]
    console.log("this is the test array "+ testarray[i])
}


if (0==0)
{Session.set("loading",0)
    
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
            text: Session.get("operator")+" vs Permanent"
        },
         xAxis: {
           categories: testarray,
            labels: {
                style: {
                    color: 'black',
                    fontSize:'15px'
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
chart.series[0].update({name:"Average productivity"}, false);
chart.redraw();
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



Template.opaverageworkcell.rendered = function(){
     


};

Template.opaverageworkcell.helpers({
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

