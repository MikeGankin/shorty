import {collection, doc, setDoc, serverTimestamp} from 'firebase/firestore'
import type {ShortLink} from '~/types'

/**
 * Сохраняет оригинальную ссылку и shortCode в Firestore
 */
export async function saveShortLink(originalUrl: string, shortCode: string, uid: string): Promise<ShortLink> {
	const {$db} = useNuxtApp()
	const linkRef = doc(collection($db, `users/${uid}/links`), shortCode)

	await setDoc(linkRef, {
		originalUrl,
		shortCode,
		createdAt: serverTimestamp()
	})

	return {
		originalUrl,
		shortCode,
		createdAt: new Date() // для UI, реальное время обновится в Firestore
	}
}
