import {ref} from 'vue'
import {browserLocalPersistence, setPersistence, signInWithEmailAndPassword} from 'firebase/auth'
import {useUserStore} from '~/stores/user'
import {fetchUserLinks} from "~/utils/fetchUserLinks";

export function useLogin() {
	const loading = ref(false)
	const error = ref<string | null>(null)
	const userStore = useUserStore()
	const {$auth} = useNuxtApp()

	const login = async (email: string, password: string) => {
		loading.value = true
		error.value = null
		try {
			await setPersistence($auth, browserLocalPersistence)
			const userCredential = await signInWithEmailAndPassword($auth, email, password)
			const user = userCredential.user

			userStore.setUser(user)
			const links = await fetchUserLinks(user.uid)
			userStore.setLinks(links)

			return user
		} catch (err: any) {
			error.value = err.message
			return null
		} finally {
			loading.value = false
		}
	}

	return {login, loading, error}
}
