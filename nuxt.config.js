export default {
	mode: 'spa',
	head: {
		titleTemplate: '%s | Peexoo - Photography at your fingertips.',
		title: 'Welcome',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
		// '~/assets/css/main.css'
	],
	plugins: [
	],
	buildModules: [
		'@nuxtjs/vuetify',
	],
	modules: [
		'@nuxtjs/pwa',
	],
	/*
	** vuetify module configuration
	** https://github.com/nuxt-community/vuetify-module
	*/
	vuetify: {
		customVariables: ['~/assets/styles/variables.scss'],
		defaultAssets: false,
		optionsPath: '~/plugins/vuetify.options.js'
	},
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
