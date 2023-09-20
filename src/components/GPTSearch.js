import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
	return (
		<div>
			<div className="absolute -z-10">
				<img src={BG_URL} alt="Login and SignUp page background" />
			</div>
			<GPTSearchBar />
			<GPTMovieSuggestions />
		</div>
	);
};

export default GPTSearch;
