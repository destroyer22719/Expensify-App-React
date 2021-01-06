import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="box-layout">
        <button onClick={this.props.startLogin}>Login</button>
      </div>
    )
  }
}

const matchDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, matchDispatchToProps)(LoginPage);
