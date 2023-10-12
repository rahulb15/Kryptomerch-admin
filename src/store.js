import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import storage from "redux-persist/lib/storage";
import loginSlice from './redux/login-redux/login.slice.';
import adminUser from './redux/get-admin-user/getAdminUser.slice';
import creatorListSlice from './redux/get-creators/getCreators.slice';
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    loginStatus: loginSlice,
    adminUser: adminUser,
    creatorListSlice: creatorListSlice
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;