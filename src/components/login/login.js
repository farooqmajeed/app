/*import React, { Component } from 'react';
import * as Mui from 'material-ui';
import styles from './login.css';
import { Link } from 'react-router';

 
class LoginComponent extends Component{
    constructor(props){
        
        super(props);

         this.state = {email:'', password:''};
         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleSubmit = this.handleLoginSubmit.bind(this);
    }
 

handleLoginSubmit(ev){
    ev.preventDefault();
    var email = this.refs.email.getValue();
     var password = this.refs.password.getValue();
     var userObj = {
         email: email, 
     password: password 
    };
         this.props.loginRequest(userObj);
 
}
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


   render() {
      
        return (
       
             
                        <div className="signup-loginContainer">
                        <Mui.Paper className="signup-paper">
                        <form onSubmit={this.handleSubmit}>
                            <Mui.TextField
                                hintText="name@mail.com"
                                floatingLabelText="Email"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                            
                                onChange={this.handleInputChange}
                                /><br />
                            <Mui.TextField
                                hintText=" Password"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            <Mui.RaisedButton type="submit" label="Submit" primary = "true"className="signup-loginBtn"  /> 
                          
                        </form>
                        </Mui.Paper>
                   </div>
                
          
        );
    }

}
export default LoginComponent;*/