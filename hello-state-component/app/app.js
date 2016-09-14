//Require dependencies
var React = require('react');
var ReactDOM = require('react-dom');

//createClass HelloUser
var HelloUser = React.createClass({
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
  React.getElementById('app');
);