import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Zehad Sarkar",
  email: "zehad@mymail.com",
  phone: "0123456789",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// export const { users } = usersSlice.actions;

export default usersSlice.reducer;
