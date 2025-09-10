import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { useMemo } from 'react'
import type { TransactionModel } from '../models/transaction.model'
import { Faketransactions } from '../utils/fakeData'

export const useTransaction = () => {
    const transactions = useSelector((state: RootState) => state.transaction)
    console.log("transactions", transactions)
    const transactionsArray: TransactionModel[] = useMemo(() => {
        return Faketransactions
    }, [transactions])

    return ({
        transactions,
        transactionsArray
    })
}
