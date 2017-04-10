export default class StockActions {

    static AddStore = 'AddStore';
    static AddStoreSuccess = 'AddStoreSuccess';
    static AddStoreFail = 'AddStoreFail';

static addStore() {
        return {
            type: StockActions.AddStore
        }
    }

    static addStoreSuccess(storeObj) {
        return {
            type: StockActions.AddStoreSuccess,
            payload: storeObj
        }
    }

    static addStoreFail(error) {
        return {
            type: StockActions.AddStoreFail,
            payload: error
        }
    }  



}
