import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
	name: "gpt",
	initialState: {
		showGPTSearch: false,
		movieResults: null,
		movieNames: null,
	},
	reducers: {
		toggleGPTSearchView: (state) => {
			state.showGPTSearch = !state.showGPTSearch;
		},
		addGPTMovieResult: (state, action) => {
			const { gptMoviesList, tmdbResults } = action.payload;
			state.movieNames = gptMoviesList;
			state.movieResults = tmdbResults;
		},
	},
});

export const { toggleGPTSearchView, addGPTMovieResult } = gptslice.actions;

export default gptslice.reducer;
