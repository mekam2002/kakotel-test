// third-party
import { combineReducers, configureStore, type UnknownAction } from '@reduxjs/toolkit';


import localforage from 'localforage';
import { persistReducer, persistStore } from 'redux-persist';
import transactionReducer, { initialState as transInitState } from "./transactions.slice"
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const persistConfig = {
    key: 'counter',
    storage: localforage,
};

const reducers = combineReducers({
    transaction: transactionReducer,
});

const initialState: Record<string, any> = {
    transactions: transInitState,
};

const rootReducer = (state: any, action: UnknownAction) => {
    if (action.type === 'USER_LOGGED_OUT') {
        return { ...initialState };
    }
    return reducers(state, action);
};
const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistReducers,
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStateReturn = () => RootState;
// eslint-disable-next-line no-unused-vars
export declare type Callback = (...args: any[]) => void;

export default persistStore(store);
