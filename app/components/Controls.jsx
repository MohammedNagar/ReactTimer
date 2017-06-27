var React =  require('react');
var propTypes = require('prop-types');

var Controls = React.createClass({
  propTypes:{
    countdownStatus: propTypes.string.isRequired
  },
 render: function(){
   var {countdownStatus} = this.props;
   var renderStartPauseButton = () =>{
     if(countdownStatus === 'started'){
       return <button className="button secondary">Pause</button>
     }else if(countdownStatus === 'paused'){
        return <button className="button primary">Start</button>
     }
   };
   return(
     <div className="controls">
        {renderStartPauseButton()}
        <button className="button alert hollow">Clear</button>
     </div>

   );
 }
});

module.exports = Controls;
