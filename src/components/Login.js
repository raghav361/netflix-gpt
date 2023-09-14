import { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
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
			<form className="w-1/3 p-12 bg-black absolute my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
				<h1 className="font-bold text-3xl py-4 text-center">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						type="text"
						placeholder="Full Name"
						className="rounded-lg p-4 my-4 w-full bg-zinc-700"
					/>
				)}
				<input
					type="text"
					placeholder="Email Address"
					className="rounded-lg p-4 my-4 w-full bg-zinc-700"
				/>
				<input
					type="password"
					placeholder="Password"
					className="rounded-lg p-4 my-4 w-full bg-zinc-700"
				/>

				<button className="rounded-lg p-4 my-6 text-lg font-medium bg-red-700 w-full">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p onClick={toggleSignInForm}>
					{isSignInForm ? (
						<p className="flex flex-wrap font-thin text-zinc-300">
							New to Netflix?
							<p className="mx-2 cursor-pointer hover:underline font-normal text-white">
								Sign Up
							</p>
						</p>
					) : (
						<p className="flex flex-wrap font-thin text-zinc-300">
							Already a User?
							<p className="mx-2 cursor-pointer hover:underline font-normal text-white">
								Sign in
							</p>
						</p>
					)}
				</p>
			</form>
		</div>
	);
};

export default Login;
