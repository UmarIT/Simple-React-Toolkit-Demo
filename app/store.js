const configureStore = require("@reduxjs/toolkit").configureStore
const ReduxLogger = require('redux-logger')
const logger = ReduxLogger.createLogger()
const CakeReducer = require('../features/cake/cakeSlice')
const IceCreamReducer = require('../features/icecream/iceCreamSlice')
const UserReducer = require('../features/user/userSlice')
const Store = configureStore({
 reducer:{
     cake:CakeReducer,
     iceCream:IceCreamReducer,
     user:UserReducer
 },
//  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})
module.exports = Store