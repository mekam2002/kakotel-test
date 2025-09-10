import { createSlice } from '@reduxjs/toolkit';
import type { TransactionModel } from '../models/transaction.model';

// initial state
export const initialState: Record<string, TransactionModel> = {};

// ==============================|| SLICE - TRANSACTION ||============================== //

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        initTransaction(state, { payload }) {
            state.userData = payload;
        },
    }
});

export default transactionSlice.reducer;

export const { initTransaction } =
    transactionSlice.actions;