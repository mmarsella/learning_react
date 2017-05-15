class App extends React.Component {
  render() {
    var style = {color: "red"};  // using as obj to insert as style
    return (
       <div>
          {/* Anything wrapped in {} will be evaulated as JS */}
         <h1 style={style}>Hello {this.props.name}!</h1>
         <p className="primary-text">
            This JSX will not be rendered because it is commented out using JavaScript
         </p> 
       </div>
    );
  }
}

ReactDOM.render(
    <App name="student"/>,
    document.getElementById('app')
);

