import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store'
import { initTransaction } from '../store/transactions.slice'
import { Faketransactions } from '../utils/fakeData'

export const useInit = () => {
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(initTransaction(Faketransactions))
    }, [])
    return ({})
}
