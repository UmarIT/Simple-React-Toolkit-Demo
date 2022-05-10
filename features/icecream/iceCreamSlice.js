const createSlice = require('@reduxjs/toolkit').createSlice


const initialState={
    numOficeCream:20
}
const IceCreamSlice  = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOficeCream--

        },
        restocked:(state,action) => {
            state.numOficeCream += action.payload
        }
    }
})
module.exports = IceCreamSlice.reducer
module.exports.iceCreamActions = IceCreamSlice.actions