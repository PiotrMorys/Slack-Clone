import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;

// import { fetchCount } from './counter/counterAPI';
// const initialState = {
  //   value: 0,
  //   status: 'idle',
  // };
  
  // // The function below is called a thunk and allows us to perform async logic. It
  // // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
  // // will call the thunk with the `dispatch` function as the first argument. Async
  // // code can then be executed and other actions can be dispatched. Thunks are
  // // typically used to make async requests.
  // export const incrementAsync = createAsyncThunk(
    //   'counter/fetchCount',
    //   async (amount) => {
      //     const response = await fetchCount(amount);
      //     // The value we return becomes the `fulfilled` action payload
      //     return response.data;
      //   }
      // // We can also write thunks by hand, which may contain both sync and async logic.
      // // Here's an example of conditionally dispatching actions based on current state.
      // export const incrementIfOdd = (amount) => (dispatch, getState) => {
      //   const currentValue = selectCount(getState());
      //   if (currentValue % 2 === 1) {
      //     dispatch(incrementByAmount(amount));
      //   }
      // };
  // );