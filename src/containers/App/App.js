import React, {Component} from 'react';
import Store from '../../components/store/store'
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import StockMiddleware from  '../../store/middleware/appMiddleware'
function mapStateToProps(state){
     app: state.app
};

function mapDispatchToProps(dispatch){
 
  addStore : (storeObj)=>dispatch(StockMiddleware.addStore(storeObj))
};


class App extends Component{
      constructor(props){
    super(props);
    setTimeout(() => {
        this.props.isLoggedIn()
    }, 5);
      }
 componentWillMount() {
    this.props.addStore();
    // this.props.getProductList();
    // this.props.getStockCount();
    if(this.props.isAuthenticated){
      console.log("Authenticated");

 } 

 }
render() {
    return(
       <div>
          <Store  addStore = {this.props.app} />
       </div>
    );
}

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
