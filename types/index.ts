export type ShortLink = {
	originalUrl: string
	shortCode: string
	createdAt: Date
}

export type AuthUser = {
	email: string | null
	uid: string
	createdAt: string
	lastLoginAt: string | undefined
}
