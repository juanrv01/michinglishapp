import { configureStore } from "@reduxjs/toolkit";

import { dataSlice } from "./data"
import { linkwordsSlice } from "./linkwords";


export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        linkwords: linkwordsSlice.reducer
    }
})