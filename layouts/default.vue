<template>
	<v-app>
		<Toolbar />

		<v-content>
			<nuxt />
		</v-content>
	</v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar'

export default {
	components: { Toolbar }
}
</script>
