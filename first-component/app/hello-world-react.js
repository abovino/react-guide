// Required dependencies
var React = require('react');
var ReactDOM = require('react-dom');

//Creates class HelloWorld which renders the HTML
//HTML must be wrapped in a container div
var HelloWorld = React.createClass({
  render: function() {
    return (
        <div>
          <h1>Hello World!</h1>
        </div>
      )
  }
});

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('app')
);