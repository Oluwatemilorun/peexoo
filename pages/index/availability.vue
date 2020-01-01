<template>
	<v-row class="ma-0">
		<v-col cols="12">
			<v-date-picker v-model="date1" :events="arrayEvents" full-width show-current readonly flat event-color="green lighten-1"></v-date-picker>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data: () => ({
		arrayEvents: null,
		date1: new Date().toISOString().substr(0, 10),
		date2: new Date().toISOString().substr(0, 10)
	}),

	mounted() {
		this.arrayEvents = [...Array(6)].map(() => {
			const day = Math.floor(Math.random() * 30)
			const d = new Date()
			d.setDate(day)
			return d.toISOString().substr(0, 10)
		})
	},

	methods: {
		functionEvents(date) {
			const [, , day] = date.split('-')
			if ([12, 17, 28].includes(parseInt(day, 10))) return true
			if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
			return false
		}
	}
}
</script>

<style>
</style>