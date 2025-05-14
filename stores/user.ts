import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {User} from 'firebase/auth'
import type {AuthUser, ShortLink} from "~/types";

export const useUserStore = defineStore('user', () => {
	const user = ref<AuthUser | null>(null)
	const links = ref<ShortLink[]>([])
	const loading = ref(false)
	const error = ref<string | null>(null)
	const isAuthReady = ref(false)

	function setUser(firebaseUser: User | null) {
		if (firebaseUser) {
			user.value = {
				email: firebaseUser.email,
				uid: firebaseUser.uid,
				createdAt: firebaseUser.metadata.creationTime,
				lastLoginAt: firebaseUser.metadata.lastSignInTime
			}
			isAuthReady.value = true
		} else {
			user.value = null
			isAuthReady.value = false
		}
	}


	function setLinks(newLinks: ShortLink[]) {
		links.value = newLinks
	}

	return {
		user,
		links,
		loading,
		error,
		setUser,
		setLinks,
		isAuthReady
	}
})
