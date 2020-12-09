import React from 'react';
import ReactDom from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <WrappedComponent {...props}/>
      <p>This is private info</p>
    </div>
  )
}

const requireAuthentication = Component => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <Component {...props}/>: <div>Not Authenticated</div>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
ReactDom.render(<AuthInfo isAuthenticated={false} info="hello world"/>, document.getElementById('app'))