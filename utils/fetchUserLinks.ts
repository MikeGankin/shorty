import {collection, getDocs} from 'firebase/firestore'
import type {ShortLink} from '~/types'

export async function fetchUserLinks(uid: string): Promise<ShortLink[]> {
	const {$db} = useNuxtApp()
	const snap = await getDocs(collection($db, `users/${uid}/links`))

	return snap.docs.map(doc => {
		const data = doc.data()
		return {
			originalUrl: data.originalUrl,
			shortCode: data.shortCode,
			createdAt: data.createdAt?.toDate?.() ?? new Date()
		}
	})
}


