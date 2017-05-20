var React = require('react');
var { HashRouter, Route, Switch } = require('react-router-dom');

var Navigation =require('Navigation');
var Timer =require('Timer');
var Countdown=require('Countdown');

var Main  = (props)=> {

  return (
    <div>
    <HashRouter>
      <div>
       <Navigation/>
       <div className="columns medium-6 large-4 small-centered">
       <Switch>
          <Route path='/timer' component={Timer}/>
          <Route path='/countdown' component={Countdown}/>
          <Route component={Timer}/>
       </Switch>
     </div>
      </div>
    </HashRouter>
    </div>
  );

}

module.exports =Main;
