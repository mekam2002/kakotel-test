import { createSlice } from '@reduxjs/toolkit';
import type { TransactionModel } from '../models/transaction.model';

// initial state
export const initialState: Record<string, TransactionModel> = {};

// ==============================|| SLICE - TRANSACTION ||============================== //

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        initTransaction(state, action) {
            const payload = action.payload;
            for (const event of payload) {
                state[event.id] = event;
            }
        },
    }
});

export default transactionSlice.reducer;

export const { initTransaction } =
    transactionSlice.actions;