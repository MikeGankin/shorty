import {signOut} from 'firebase/auth'
import {useUserStore} from '~/stores/user'

export function useLogout() {
	const userStore = useUserStore()
	const {$auth} = useNuxtApp()
	const logout = async () => {
		try {
			await signOut($auth)

			userStore.setUser(null)
			userStore.setLinks([])

			// Уведомление и переход
			if (process.client) {
				console.log('Пользователь вышел')
			}

			await navigateTo('/auth')

		} catch (err) {
			console.error('Ошибка при выходе:', err)
		}
	}

	return {
		logout
	}
}
