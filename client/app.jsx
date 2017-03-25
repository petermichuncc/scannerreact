import React from 'react';

// define and export our Layout component
/*
So here I'm designing a layout to route certain data through
I can try out the data entry program using this 


*/
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const dataLayout = ({content}) => (

<MuiThemeProvider>
{/*  Here is the div used for the first app */}

 
 <div id="dataentry_container" className="center" >
<img src="logo.jpg" className="z-depth-3"/><br/><br/>

            <div id="centered_box_data"  className="z-depth-5 center">
        
 <div className="center">
 

       {content}

</div>

</div><br/>



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