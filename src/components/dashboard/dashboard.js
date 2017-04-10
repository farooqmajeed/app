import React, { Component } from 'react';
import * as Mui from 'material-ui';
import './dashboard.css'
import {browserHistory, Link} from 'react-router';
import  LogoutRequest from '../../store/actions/Logout'
class Dashboard extends Component{
    constructor(){
        super()
        this.state = {open : false}
    }
     handleToggle = () =>this.setState({ open : !this.state.open}) 
     handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    // createStore = () =>{
    //     // this.setState({open : !this.state.open})
    //     browserHistory.push('/createStore')
    // }

    // createProduct = () =>{
    //     // this.setState({open : !this.state.open})
    //     browserHistory.push('/createProduct')
    // }

    // addPurchase = () =>{
    //     // this.setState({open : !this.state.open})
    //     browserHistory.push('/AddPurchaseDetail')
    // }

    // addSale = () =>{
    //     // this.setState({open : !this.state.open})
    //     browserHistory.push('/Addsale')
    // }

    // gotoPurchase = () =>{
    //     // this.setState({open : !this.state.open})
    //     browserHistory.push('/Purchase')
    // }

    // gotoSale = () =>{
    //     // this.setState({open : !this.state.open})
    //     browserHistory.push('/saleDetail')
    // }

    // gotoStock = () =>{
    //     // this.setState({open : !this.state.open})
    //     browserHistory.push('/stock')
    // }
    logoutRequest = () => {
        this.setState({ open: !this.state.open });
        this.props.LogoutRequest();
    }
    render(){
        return(
            
                
 
                        <div className="db-loginContainer">
                        <Mui.Paper className="db-paper">
                        <form onSubmit={this.handleSubmit}>
                             <Link to='/store' > <Mui.RaisedButton type="submit" label="Store" className="btn" secondary="true" /></Link>
                            <br />
                            <br />
                            <Mui.RaisedButton type="submit" label="Products" secondary = "true" className="btn" /> 
                            <br />
                            <Mui.RaisedButton type="submit" label="Sale" secondary = "true" className="btn" />
                            <br /> 
                            <Mui.RaisedButton type="submit" label="Purchase" secondary = "true" className="btn"  /> 
                          
                        </form>
                        </Mui.Paper>
                   </div>




               
            
        )
    }
}

export default Dashboard;