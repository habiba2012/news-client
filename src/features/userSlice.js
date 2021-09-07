import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        /* isSignedIn: false,
        userData: null, */
        userName: null,
        userEmail: null,
        searchInput: "tech",
        blogData: null,
    },
    reducers: {
        /* setSignedIn: (state, action) => {
          state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
          state.userData = action.payload;
        }, */
        setActiveUser: (state, action) => {
            state.userName = action.payload;
            state.userEmail = action.payload;
        },
        setUserLogOutState: (state, action
        ) => {
            state.userName = null
        },
        setInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload;
        },
    },
});

export const {
    /*  setSignedIn,
     setUserData, */
    setActiveUser,
    setUserLogOutState,
    setInput,
    setBlogData,
} = userSlice.actions;/* 

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData; */
export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer;
