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
  handleChange: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  render: function() {
    return (
      <div>
        <h1>Hello {this.state.username}</h1> <br />
        Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});

ReactDOM.render(
  <HelloUser />,
  document.getElementById('app')
);