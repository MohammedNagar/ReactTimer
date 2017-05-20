var React= require('react');
var ReactDOM = require('react-dom');
var { BrowserRouter, Route } =require('react-router-dom');
var Main  = require('Main');

//Load foundation

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app style

require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
      <Main/>,
      document.getElementById('app')
);
