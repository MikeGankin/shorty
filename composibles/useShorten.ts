import {ref} from 'vue'
import {useUserStore} from '~/stores/user'
import {createShortLink} from '~/utils/createShortLink'
import type {ShortLink} from '~/types'

export function useShorten() {
	const url = ref('')
	const loading = ref(false)
	const error = ref<string | null>(null)

	const userStore = useUserStore()

	const shorten = async () => {
		loading.value = true
		error.value = null

		try {
			if (!url.value.trim()) throw new Error('Введите ссылку')
			if (!userStore.user) throw new Error('Нет пользователя')

			const newLink: ShortLink = await createShortLink(url.value.trim(), userStore.user.uid)
			userStore.links.unshift(newLink)
			url.value = ''
		} catch (err: any) {
			error.value = err.message || 'Ошибка при сокращении'
		} finally {
			loading.value = false
		}
	}

	return {
		url,
		shorten,
		loading,
		error
	}
}
