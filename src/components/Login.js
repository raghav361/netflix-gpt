import { useRef, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const [errorMessage, setErrorMessage] = useState(null);

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const handleButtonClick = () => {
		// Validate the Form Data
		const message = checkValidData(email.current.value, password.current.value);
		setErrorMessage(message);

		if (message) return;

		//Sign In / Sign Up
		if (!isSignInForm) {
			// Sign Up
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
						photoURL:
							"https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
							navigate("/browse");
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " " + errorMessage);
				});
		} else {
			// Sign In
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					navigate("/browse");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " " + errorMessage);
				});
		}
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
					alt="Login and SignUp page background"
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-1/3 p-12 bg-black absolute my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
			>
				<h1 className="font-bold text-3xl py-4 text-center">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="rounded-lg p-4 my-4 w-full bg-zinc-700"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email Address"
					className="rounded-lg p-4 my-4 w-full bg-zinc-700"
				/>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="rounded-lg p-4 my-4 w-full bg-zinc-700"
				/>
				<p className="text-red-600 font-bold text-lg">{errorMessage}</p>
				<button
					className="rounded-lg p-4 my-6 text-lg font-medium bg-red-700 w-full"
					onClick={handleButtonClick}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p onClick={toggleSignInForm}>
					{isSignInForm ? (
						<span className="flex flex-wrap font-thin text-zinc-300">
							New to Netflix?
							<span className="mx-2 cursor-pointer hover:underline font-normal text-white">
								Sign Up
							</span>
						</span>
					) : (
						<span className="flex flex-wrap font-thin text-zinc-300">
							Already a User?
							<span className="mx-2 cursor-pointer hover:underline font-normal text-white">
								Sign in
							</span>
						</span>
					)}
				</p>
			</form>
		</div>
	);
};

export default Login;
