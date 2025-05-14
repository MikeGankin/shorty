import {defineEventHandler, getRouterParam, sendRedirect} from 'h3'
import {getFirestore, collectionGroup, query, where, getDocs} from 'firebase/firestore'

export default defineEventHandler(async (event) => {
	const shortCode = getRouterParam(event, 'shortCode')
	const db = getFirestore()

	const q = query(
		collectionGroup(db, 'links'),
		where('shortCode', '==', shortCode)
	)

	const snap = await getDocs(q)

	if (!snap.empty) {
		const originalUrl = snap.docs[0].data().originalUrl
		return sendRedirect(event, originalUrl, 301)
	}

	return sendRedirect(event, '/not-found', 302)
})
