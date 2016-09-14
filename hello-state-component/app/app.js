//Require dependencies
var React = require('react');
var ReactDOM = require('react-dom');

//createClass HelloUser
var HelloUser = React.createClass({
  //getInitialState returns an object which contains the state/data for component
  //This function keeps track of username
  getInitialState: function() {
    return {
        username: "@bov188"
      }
  }, 
  render: function() {
    return (
      <div>
        <h1>Hello {this.state.username}</h1>
      </div>
    )
  }
});

ReactDOM.render(
  <HelloUser />,
  document.getElementById('app')
);