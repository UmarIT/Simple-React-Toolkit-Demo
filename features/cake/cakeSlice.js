const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfcake:10
}
const cakeSlice = createSlice({
    name: 'cake',
  initialState,
  reducers:{
      ordered:(state) => {
             state.numOfcake--
      },
      restocked:(state,action) =>{
          state.numOfcake += action.payload
      },
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions