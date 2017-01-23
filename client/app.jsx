import React from 'react';

// define and export our Layout component
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