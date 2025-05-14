import {doc, setDoc, serverTimestamp} from 'firebase/firestore'
import {type User} from 'firebase/auth'

export async function useCreateUserCollection(user: User) {
	const {$db} = useNuxtApp()
	const userRef = doc($db, 'users', user.uid)

	await setDoc(userRef, {
		email: user.email,
		createdAt: serverTimestamp()
	}, {merge: true})
}
