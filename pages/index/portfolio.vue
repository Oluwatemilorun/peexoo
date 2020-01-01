<template>
	<v-row>
		<v-col v-for="i in 3" :key="i" cols="12">
			<v-skeleton-loader
				ref="skeleton"
				type="card"
				class="mx-auto"
			></v-skeleton-loader>
		</v-col>
	</v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>