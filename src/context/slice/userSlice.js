import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: JSON.parse(localStorage.getItem("user")) || [],
  },

  reducers: {
    addToUsers(state, { payload }) {
      state.data = [...state.data, payload];
      localStorage.setItem("user", JSON.stringify(state.data));
    },
    removeUsers(state, { payload }) {
      state.data = state.data.filter((user) => user.id !== payload.id);
      localStorage.setItem("user", JSON.stringify(state.data));
    },
    followUser(state, { payload }) {
      state.data = state.data.map((user) =>
        user.id === payload.id ? { ...user, follow: !user.follow } : user
      );
      localStorage.setItem("user", JSON.stringify(state.data));
    },
  },
});

export const { addToUsers, removeUsers, followUser } = userSlice.actions;

export default userSlice.reducer;
