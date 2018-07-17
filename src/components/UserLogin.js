import React from "react";
import LoginForm from './components/LoginForm.js';

class UserLogin extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm /> 
        </div>
      </div>
    )
  }
}

export default UserLogin