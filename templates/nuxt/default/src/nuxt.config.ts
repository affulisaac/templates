// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://designs.hubtel.com/v4/assets/css/main.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
					integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp',
					crossorigin: 'anonymous',
				}

			],
			script: [
				
				{
					src: 'https://code.jquery.com/jquery-3.6.0.min.js',
					integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
					crossorigin: 'anonymous',
				},

				{
					src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js	',
				},
				{
					src: 'https://designs.hubtel.com/v4/assets/js/main.js',
				},
				
			],
		}
	},
	ssr: false,
	runtimeConfig: {
		public: {
			apiBase: '',
			defaultToken: ''
		},
	},
})
