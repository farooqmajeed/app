import React, { Component } from 'react';
import  LogoutRequest  from '../store/actions/Logout';
import { connect } from 'react-redux';


import * as Mui from 'material-ui';
// import './logo.css';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class rootContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, isAdmin:false };
    }

    handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    // gotoDashoard = () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/dashboard');
    // };

    // gotoAvailable = () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/addReport');
    // };

    // gotoAddSales= () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/addSales');
    // };

    gotoStore= () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/store');
    };

    //  gotoComplains = () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/myIncidents');
    // };

    // viewProducts = () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/viewProducts');
    // };

    //  gotoViewSales = () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/viewSales');
    // };

    // viewPurchase = () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/viewPurchase');
    // };

    // componentDidMount() {
    //     this.props.loadUserRequest();
    // }

    // componentWillReceiveProps() {
    //     setTimeout(() => {
    //         if (!this.props.app || !this.props.app.user) {
    //              browserHistory.push('/login');
        //     }else if(this.props.app && this.props.app.user && this.props.app.user.isAdmin){
        //       this.setState({isAdmin:true});
    // }
    //      }, 5)
    // }

    // addProduct = () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/addProduct');
    // }

    // addPurchase = () => {
    //     this.setState({ open: !this.state.open })
    //     browserHistory.push('/addPurchase');
    // }


    logoutRequest = () => {
        this.setState({ open: !this.state.open });
        this.props.logoutRequest();
    }

    render() {
        return (
            <div>
                <Mui.AppBar
                    title="Inventory Management System"
                    onLeftIconButtonTouchTap={this._handleClick}
                    />
                <Mui.Drawer open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({ open })}>
                    <Mui.MenuItem disabled className="disbaledImage"><img src="http://rig-serv.com/wp-content/uploads/2016/03/inventory-matters-logo-white.png"   /></Mui.MenuItem>
                    
                     <Mui.MenuItem onTouchTap={this.gotoStore}>CreateStore</Mui.MenuItem>
                    <Mui.MenuItem onTouchTap={this.logoutRequest}>Logout</Mui.MenuItem>
                </Mui.Drawer>
                {this.props.children}
            </div>
        );
    }
}


function mapStateToProps(state) {
  
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
  
    return {

        logoutRequest: () => dispatch(LogoutRequest()),
       
    };
}

const rootMainContainer = connect(mapStateToProps, mapDispatchToProps)(rootContainer);

export default rootMainContainer;