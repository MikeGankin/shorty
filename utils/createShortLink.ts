import {generateShortCode} from './generateShortCode'
import {saveShortLink} from './saveShortLink'
import type {ShortLink} from '~/types'

/**
 * Генерация кода и сохранение ссылки в Firestore
 */
export async function createShortLink(originalUrl: string, uid: string): Promise<ShortLink> {
	const shortCode = generateShortCode()
	return await saveShortLink(originalUrl, shortCode, uid)
}
