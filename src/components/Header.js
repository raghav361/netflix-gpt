import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptslice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const user = useSelector((store) => store.user);

	const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		// Unsubscribe when component unmounts
		return () => unSubscribe();
		// eslint-disable-next-line
	}, []);

	const handleGPTSearchClick = () => {
		dispatch(toggleGPTSearchView());
	};

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-neutral-800 z-10 flex justify-between">
			<img className="w-44" src={LOGO} alt="Logo" />
			{user && (
				<div className="flex p-2">
					{showGPTSearch && (
						<select
							className="p-2 m-2 bg-zinc-800 text-white"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((language) => (
								<option key={language.identifier} value={language.identifier}>
									{language.name}
								</option>
							))}
						</select>
					)}

					<button
						className="py-2 px-4 mx-4 my-2 bg-red-800 text-white rounded-lg"
						onClick={handleGPTSearchClick}
					>
						{showGPTSearch ? "HomePage" : "GPT Search"}
					</button>
					<img
						className="w-12 h-12 m-2"
						alt="an icon of the signed user"
						src={user?.photoURL}
					/>
					<button onClick={handleSignOut} className="font-bold text-white">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
