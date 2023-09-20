import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
	name: "gpt",
	initialState: {
		showGPTSearch: false,
	},
	reducers: {
		toggleGPTSearchView: (state) => {
			state.showGPTSearch = !state.showGPTSearch;
		},
	},
});

export const { toggleGPTSearchView } = gptslice.actions;

export default gptslice.reducer;
