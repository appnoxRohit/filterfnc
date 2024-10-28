import { configureStore} from '@reduxjs/toolkit'
import filterReducer from '../redux/Slice'


export const store = configureStore({
    reducer:{
        filters:filterReducer

    },
})