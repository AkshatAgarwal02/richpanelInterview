import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import FacebookLogin from '../src/facebook';
import FacebookLoginWithButton from '../src/facebook-with-button'

const responseFacebook = (response) => {
  console.log(response);
};

class Base extends Component {
  render() {
    return (
      <div>
        <Link to="/dummy">Routing to Akshat Page</Link>

        <div>
          <p>Facebook login with default button and styling</p>
          <FacebookLoginWithButton
            appId="797676704228158"
            autoLoad
            callback={responseFacebook}
            icon="fa-facebook"
          />
        </div>

        <div>
          <p>Facebook login with render prop (and no styling provided out the box)</p>
          <FacebookLogin
            appId="797676704228158"
            autoLoad
            callback={responseFacebook}
            render={renderProps => (
              <button onClick={renderProps.onClick}>This is my custom FB button</button>
            )}
          />
        </div>
      </div>
    );
  }
}

class Dummy extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>
          This is just a dummy page to perform the RichPanel Task<br />
         
          </a>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Base}/>
    <Route path="/dummy" component={Dummy}/>
  </Router>,
  document.getElementById('demo')
);
