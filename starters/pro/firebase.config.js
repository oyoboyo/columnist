import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Initialize configuration
const firebaseConfig = {
	apiKey: "AIzaSyC8d8xIzw5r4pmJEOVNmfNOfek4nIWDomA",
	authDomain: "columnist-pro-demo.firebaseapp.com",
	projectId: "columnist-pro-demo",
	storageBucket: "columnist-pro-demo.appspot.com",
	messagingSenderId: "329773032471",
	appId: "1:329773032471:web:655b368b53ede3e6912852",
	measurementId: "G-W1MKNY7V7M",
};

export const firebaseApp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(firebaseApp);
