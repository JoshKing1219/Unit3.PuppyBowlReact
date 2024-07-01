import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "./api/PuppyBowlApi";

export const store = configureStore({
    reducer: {
        [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    },

    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(puppyBowlApi.middleware),
});

export default store;