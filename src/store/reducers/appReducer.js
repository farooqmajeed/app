import StockActions from './../actions/inventartyActions';

const int_state = { 
    
};
function appReducer (state = int_state, action) {
    switch (action.type){
      
    //      case ActionTypes.DonorRequestSuccess: {
    //         var newState  = Object.assign({}, state,{donor: action.data})
    //         state = newState;
    //         return state;
    //     }
       
    //    case ActionTypes.BloodRequestSuccess:{
    //        return  Object.assign({}, state, {donordetail: action.data})
          
    //    }
         case StockActions.AddStore:
            return {...state, isProcessing: true, isError : false,isDetailUpdated:false};
      
        default:
      return state;
    }
    
}  

export default appReducer;
