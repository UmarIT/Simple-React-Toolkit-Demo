
const Store = require('./app/store')
const cakeActions =require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log('Initial State',Store.getState())
//Before Apply Middleware Logger
const unsubscribe = Store.subscribe(() => console.log('Update State',Store.getState()))
//After Apply Middleware Logger
// const unsubscribe = Store.subscribe(() =>{})
// Store.dispatch(cakeActions.ordered())
// Store.dispatch(cakeActions.ordered())
// Store.dispatch(cakeActions.ordered())
// Store.dispatch(cakeActions.restocked(3))
// Store.dispatch(iceCreamActions.ordered())
// Store.dispatch(iceCreamActions.ordered())
// Store.dispatch(iceCreamActions.restocked(2))
// unsubscribe()
Store.dispatch(fetchUsers())
