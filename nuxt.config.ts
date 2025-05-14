// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: {enabled: true},
	css: ['~/assets/css/tailwind.css'],
	ssr: false,

	runtimeConfig: {
		public: {
			baseUrl: process.env.NUXT_PUBLIC_BASE_URL
		}
	},


	plugins: [
		'~/plugins/firebase.client.ts',
		'~/plugins/auth.client.ts'
	],

	vite: {
		plugins: [
			tailwindcss(),
		],
	},

	modules: ['shadcn-nuxt', '@pinia/nuxt'],
	shadcn: {
		componentDir: './components/ui'
	},
})