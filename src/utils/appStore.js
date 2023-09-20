import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptslice";
import configureReducer from "./configSlice";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
		gpt: gptReducer,
		config: configureReducer,
	},
});

export default appStore;
