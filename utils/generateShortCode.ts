import {customAlphabet} from 'nanoid'

/**
 * Генерация короткого base62-кода
 */
export function generateShortCode(length = 6): string {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	const nanoid = customAlphabet(alphabet, length)
	return nanoid()
}
