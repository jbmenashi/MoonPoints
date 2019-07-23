import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react'
 
const mapStateToProps = state => {
   return {
      currentUsername: state.currentUsername,
      currentUserId: state.currentUserId,
      usernameInput: state.usernameInput
   }
}

const mapDispatchToProps = dispatch => {
   return {
      setUserId: (id, username) => dispatch({type: "SET_USER", id: id, username: username}),
      inputUsername: (input) => dispatch({type: "INPUT_USERNAME", payload: input.target.value})
   }
}

class Login extends Component {

   submitUsername = (input) => {
      console.log(input)
   }

   render() { 
      return ( 
         <div>
            <h3>Login</h3>
            <Input onChange={this.props.inputUsername} value={this.props.usernameInput} placeholder="Username"/>
            <Button onClick={() => this.submitUsername(this.props.usernameInput)}>Submit</Button>
         </div>
       );
   }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);