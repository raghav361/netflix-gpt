export const LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb86TjP3oi-ttlu__yMV5xoCjBksfQNIrHqg&usqp=CAU";

export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
	},
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
	"https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [
	{ identifier: "english", name: "English" },
	{ identifier: "tamil", name: "Tamil" },
	{ identifier: "kannada", name: "Kannada" },
	{ identifier: "hindi", name: "Hindi" },
	{ identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
