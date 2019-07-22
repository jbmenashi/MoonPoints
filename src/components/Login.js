import React, { Component } from 'react';

class Login extends Component {

   componentDidMount = () => {
      fetch('http://localhost:3001/points')
         .then(res => res.json())
         .then(data => {
            console.log(data)
         })
   }
   state = {  }
   render() { 
      return ( 
         <div>
            <h3>Login</h3>
         </div>
       );
   }
}
 
export default Login;