<template>
	<div>
		<v-app-bar app fixed flat color="white">
			<v-container>
				<v-row align="center">
					<v-toolbar-title class="pt-2 mr-3">
						<a class="d-block" href="/">
							<img src="~/assets/img/logo.png" alt="Splye" class="white--text overline" height="60px" />
						</a>
					</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-btn v-for="(link, i) in userMenu" :key="i" text color="secondary" class="text-capitalize hidden-sm-and-down">
						{{link.text}}
					</v-btn>
					<v-btn text color="accent" class="text-capitalize">Login or Register</v-btn>

					<v-menu bottom left>
						<template v-slot:activator="{ on }">
							<v-btn small icon class="hidden-md-and-up" v-on="on">
								<v-icon>mdi-dots-vertical</v-icon>
							</v-btn>
						</template>

						<v-list>
							<v-list-item v-for="(item, i) in userMenu" :key="i">
								<v-list-item-title>{{ item.text }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-row>
			</v-container>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userMenu: [
				{ text: 'I am photographer', url: '' },
				{ text: 'Explore photos', url: '' },
				{ text: 'Find a photographer', url: '' },
				{ text: 'Find my photos', url: '' },
			]
		}
	}
}
</script>

<style>
</style>