// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCW6Qo9OCTi3-z6rFvGg9YOdvW-UE7gyEk",
	authDomain: "netflixgpt-1a87f.firebaseapp.com",
	projectId: "netflixgpt-1a87f",
	storageBucket: "netflixgpt-1a87f.appspot.com",
	messagingSenderId: "162988933304",
	appId: "1:162988933304:web:07334a6be2db317336b44d",
	measurementId: "G-TZQGLG029Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();
