import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    incrementByHang: (state, action) => {
      console.log(action);

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrementByPhong: (state, action) => {
      console.log(action);
      state.value -= 1;
    },
    incrementByN: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
  },
});

export const { incrementByHang, decrementByPhong, incrementByN } =
  counterSlice.actions;

// export { incrementByHang, decrementByPhong, incrementByN };

export default counterSlice.reducer;
