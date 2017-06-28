var React =  require('react');
var propTypes = require('prop-types');

var Controls = React.createClass({
  propTypes:{
    countdownStatus: propTypes.string.isRequired,
    onStatusChange: propTypes.func.isRequired
  },
  onStatusChange: function(newStatus){
    return () =>{
      this.props.onStatusChange(newStatus);
    }
  },

 render: function(){
   var {countdownStatus} = this.props;
   var renderStartPauseButton = () =>{
     if(countdownStatus === 'started'){
       return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
     }else if(countdownStatus === 'paused'){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
     }
   };
   return(
     <div className="controls">
        {renderStartPauseButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
     </div>

   );
 }
});

module.exports = Controls;
