import { configureStore } from "@reduxjs/toolkit";

import { dataSlice } from "./data"
import { linkwordsSlice } from "./linkwords";
import { verbsSlice } from "./verbs";


export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        linkwords: linkwordsSlice.reducer,
        verbs: verbsSlice.reducer
    }
})