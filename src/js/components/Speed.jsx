var React = require('react');

import axios from 'axios';

var Speed = React.createClass({
    getInitialState: function(){
      return {
          kph: 15
      }
    },
            // componentDidMount: function() {
    //     var that = this;
    //         setInterval(function(){
    //         axios.get(`/speed`)
    //         .then(function(result){
    //             that.setState ({
    //                 kph: result.data
    //             });
    //         })
    //         ,1000 });
    // },
    render: function(){
        return (
            <div className= "speedometer">
                <span>Km/h: {this.state.kph} </span>
            </div>
        )
    }
    
});




module.exports = Speed;