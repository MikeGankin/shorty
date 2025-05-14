export default defineNuxtRouteMiddleware(() => {
	const userStore = useUserStore()
	if (!userStore.isAuthReady) return
	if (!userStore.user) return navigateTo('/login')
})
