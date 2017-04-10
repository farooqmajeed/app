import React, {Component} from 'react';
import * as Mui from 'material-ui';

class Store extends Component{
    constructor(Props){
        super(Props);
        this.state = {email:'', password: ''};
        this.handleInput = this.handleInput.bind(this);
        this.submitForm = this.handleStoreSubmit.bind(this);
        // this.submitForm = this.submitForm.bind(this);
    }

    handleStoreSubmit(event){
        event.preventDefault();
        var storeName = this.refs.storeName.getValue();
        var location = this.refs.location.getValue();
        var UserObject = {
            storeName: storeName,
            location : location
        };
        // this.props.StoreRequest();
   
    }
    submitForm(data) {    
    console.log("store obj",data);
    this.props.addStore(data);    
    
  }
     handleInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

  render() {
      return(
                    <div className="signup-loginContainer">
                        <Mui.Paper className="signup-paper">
                             <Mui.AppBar title="Create Store" showMenuIconButton={false}  />
                        <form onSubmit={this.submitForm}>                            <Mui.TextField
                                hintText="Enter Store Name"
                                floatingLabelText="Store Name"
                                ref="storeName"
                                name="storeName"
                                required={true}
                                type="text"
                            
                                onChange={this.handleInputChange}
                                /><br />
                            <Mui.TextField
                                hintText=" Enter Location"
                                ref="location"
                                name="location"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                floatingLabelText="Location" />
                            <br />
                            <Mui.RaisedButton type="submit" label="Create Store" primary = {true}className="signup-loginBtn"  /> 
                          
                        </form>
                        </Mui.Paper>
                   </div>
      )
  }


}   
export default Store;