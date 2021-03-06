import React from 'react';

// define and export our Layout component
/*
So here I'm designing a layout to route certain data through
I can try out the data entry program using this 


*/
/*
Get this working without the css helpers from materialize

*/
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Blaze from 'meteor/gadicc:blaze-react-component';
const style = {
  height: 200,
  width: 500,

};

const style2 = {
  height: 150,
  width: 350,

};
const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={1} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={4} />
    <Paper style={style} zDepth={5} />
  </div>
);


export const dataLayout = ({content}) => (

<MuiThemeProvider>
{/*  Here is the div used for the first app */}

 <div className="parent">
<div className="child">
      <Paper style={style2} className="centered_box_logo" zDepth={5} >
<img src="logo.jpg"  />
</Paper>
<br/><br/>


            <Paper style={style} className="centered_box_data"zDepth={5} >


       {content}


</Paper>
<br/>


</div>



</div>

</MuiThemeProvider>
 


    
);

/*

export const Layout = ({content}) => (
    <div>
       
        <div>{content}</div>
    </div>
);

// define and export our Welcome component
export const Welcome = ({name}) => (
    <div>
        Hello, {name}.
    </div>
);

*/