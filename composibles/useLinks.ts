import {
	collection,
	doc,
	setDoc,
	serverTimestamp,
	getFirestore
} from 'firebase/firestore'
import {customAlphabet} from 'nanoid'
import type {ShortLink} from '~/types'

export async function createShortLink(originalUrl: string, uid: string): Promise<ShortLink> {
	const db = getFirestore()
	const shortCode = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6)()

	const ref = doc(collection(db, `users/${uid}/links`), shortCode)

	await setDoc(ref, {
		originalUrl,
		shortCode,
		createdAt: serverTimestamp()
	})

	return {
		originalUrl,
		shortCode,
		createdAt: new Date()
	}
}
