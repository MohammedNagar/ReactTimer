var React= require('react');
var ReactDOM = require('react-dom');
var { BrowserRouter, Route } =require('react-router-dom');
var Main  = require('Main');

//Load foundation


$(document).foundation();

//app style

require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
      <Main/>,
      document.getElementById('app')
);
