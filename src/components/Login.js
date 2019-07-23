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
      setUser: (id, username) => dispatch({type: "SET_USER", id: id, username: username}),
      inputUsername: (input) => dispatch({type: "INPUT_USERNAME", payload: input.target.value})
   }
}

class Login extends Component {

   submitUsername = (input) => {
      fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => {
         let foundUser = data.find(user => user.username === input)
         // console.log(foundUser)
         if (foundUser) {
            this.props.setUser(foundUser._id, foundUser.username)
         }
         else {
            fetch('http://localhost:3001/users', {
               method: 'POST',
               headers: {
                  'Content-Type':'application/json',
               },
               body: JSON.stringify({
                  username: input,
                  bio: 'I am a moon buffoon'
               })
            })
            .then(res => res.json())
            .then(data => console.log(data))
         }
      })
   }

   render() { 
      console.log(this.props)
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