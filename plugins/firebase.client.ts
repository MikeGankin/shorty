import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

export default defineNuxtPlugin(() => {
	const firebaseConfig = {
		apiKey: 'AIzaSyCbeA_d1S-MmFZ9-AKtEX_K399lBv4IpsQ',
		authDomain: 'shorty-d0dbb.firebaseapp.com',
		projectId: 'shorty-d0dbb',
		storageBucket: 'shorty-d0dbb.firebasestorage.app',
		messagingSenderId: '150293753442',
		appId: '1:150293753442:web:e8755be7df882fbf2bab3b',
		baseUrl: 'https://shorty-d0dbb.web.app'
	};

	const app = initializeApp(firebaseConfig)
	const db = getFirestore(app)
	const auth = getAuth(app)

	return {
		provide: {
			db,
			auth
		}
	}
})


