import {onAuthStateChanged} from 'firebase/auth'
import {useUserStore} from '~/stores/user'
import {fetchUserLinks} from "~/utils/fetchUserLinks";

export default defineNuxtPlugin(() => {
	const userStore = useUserStore()
	const {$auth} = useNuxtApp()

	onAuthStateChanged($auth, async (user) => {
		userStore.setUser(user)

		if (user) {
			const links = await fetchUserLinks(user.uid)
			userStore.setLinks(links)
		} else {
			userStore.setLinks([])
		}

		userStore.isAuthReady = true
	})
})
