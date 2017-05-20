var React = require('react');
var {Link, NavLink} =require('react-router-dom');

var Navigation = ()=> {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
               <NavLink activeClassName="active" activeStyle={{fontWeight: 'Bold'}} to="/timer">Timer</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" activeStyle={{fontWeight: 'Bold'}} to="/countdown">Countdown</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
               Created By <a href="https://github.com/MohammedNagar" target="_blank">Mohammed Shaban</a>
            </li>
          </ul>

        </div>
      </div>
    );
};

module.exports = Navigation;
