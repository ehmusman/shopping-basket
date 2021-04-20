
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer from "./rootReducer"

export default configureStore({
    reducer,
    middleware: [
        ...getDefaultMiddleware()
    ]
})