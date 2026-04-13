import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: {
    usersList: ["Deepak"],
  },
  reducers: {
    updateName: (state, action) => {
      state.usersList.push(action.payload);
    },
  },
});

export const { updateName } = nameSlice.actions;
export default nameSlice.reducer;
