import React, { Component } from 'react';
import { connect } from 'react-redux'
import { stat } from 'fs';

const mapStateToProps = state => {
   return {
      currentUsername: state.currentUsername,
      currentUserId: state.currentUserId,
      usernameInput: stat.usernameInput
   }
}

const mapDispatchToProps = dispatch => {
   return {
      setUserId: (id, username) => dispatch({type: "SET_USER", id: id, username: username}),
      inputUsername: (input) => dispatch({type: "INPUT_USERNAME", payload: input})
   }
}

class Login extends Component {


   render() { 
      return ( 
         <div>
            <h3>Login</h3>
            <input type="text" onChange={this.props.inputUsername} value={this.props.usernameInput} placeholder="Username"/><br/>
         </div>
       );
   }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);