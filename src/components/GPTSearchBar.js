import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import languages from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptslice";

const GPTSearchBar = () => {
	const dispatch = useDispatch();

	const languageKey = useSelector((store) => store.config.language);

	const searchText = useRef(null);

	const handleGPTSearchClick = async () => {
		console.log(searchText.current.value);

		const gptQuery =
			"Act as a Movie Recommendation system and suggest some movies for the query " +
			searchText.current.value +
			". Give me only names of 5 movies with comma separated like the example result given ahead. Example Result: Gadar 2, Sholay, Don, RRR, Petta";

		const gptResults = await openai.chat.completions.create({
			messages: [{ role: "user", content: gptQuery }],
			model: "gpt-3.5-turbo",
		});
		console.log(gptResults.choices);

		const gptMoviesList = gptResults?.choices[0]?.message?.content.split(",");

		const promiseArray = gptMoviesList.map((movie) => searchMovieTMDB(movie));

		const tmdbResults = await Promise.all(promiseArray);

		console.log(tmdbResults);

		dispatch(
			addGPTMovieResult({
				gptMoviesList: gptMoviesList,
				tmdbResults: tmdbResults,
			})
		);
	};

	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movie +
				"&include_adult=false&language=en-US&page=1",
			API_OPTIONS
		);

		const json = await data.json();

		return json.results;
	};

	return (
		<div className="pt-[10%] flex justify-center">
			<form
				className="bg-black bg-opacity-50 w-1/2 grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={searchText}
					className="p-4 m-4 col-span-9"
					type="text"
					placeholder={languages[languageKey].gptSearchPlaceholder}
				/>
				<button
					className="py-2 px-3 m-4 col-span-3 bg-red-700 text-white rounded-lg"
					onClick={handleGPTSearchClick}
				>
					{languages[languageKey].search}
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
