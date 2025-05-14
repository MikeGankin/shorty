import {ref} from 'vue'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useUserStore} from '~/stores/user'
import {useCreateUserCollection} from './useCreateUserCollection'

export function useRegister() {
	const loading = ref(false)
	const error = ref<string | null>(null)
	const userStore = useUserStore()
	const {$auth} = useNuxtApp()

	const register = async (email: string, password: string) => {
		loading.value = true
		error.value = null
		try {
			const userCredential = await createUserWithEmailAndPassword($auth, email, password)
			const user = userCredential.user

			await useCreateUserCollection(user)
			userStore.setUser(user)

			return user
		} catch (err: any) {
			error.value = err.message
			return null
		} finally {
			loading.value = false
		}
	}

	return {register, loading, error}
}
