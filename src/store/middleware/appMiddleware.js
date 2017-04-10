import StockActions from '../actions/inventartyActions'
import * as firebase from 'firebase';
export default  class StockMiddleware{

    static addStore(storeObj) {
        console.log("addStore ",storeObj);
        return (dispatch) => {  
            dispatch(StockActions.addStore())
            StockMiddleware.addStoreOnFirebase(dispatch,storeObj);            
        }
    }

    static addStoreOnFirebase(dispatch,storeObj){
        StockMiddleware.formatStringForKey(storeObj,"name","storeKey");
        firebase.database().ref('/')
            .child(`stores`)
            .push(storeObj)
            .then(function (){
                dispatch(StockActions.addStoreSuccess());
            })
            .catch(function (error){
                dispatch(StockActions.addStoreFail(error));
            });
    }
}