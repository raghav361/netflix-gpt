import { useSelector } from "react-redux";

import languages from "../utils/languageConstants";

const GPTSearchBar = () => {
	const languageKey = useSelector((store) => store.config.language);

	return (
		<div className="pt-[10%] flex justify-center">
			<form className="bg-black bg-opacity-50 w-1/2 grid grid-cols-12">
				<input
					className="p-4 m-4 col-span-9"
					type="text"
					placeholder={languages[languageKey].gptSearchPlaceholder}
				/>
				<button className="py-2 px-3 m-4 col-span-3 bg-red-700 text-white rounded-lg">
					{languages[languageKey].search}
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
