<template>
	<v-row>
		<v-app-bar
			absolute
			color="primary"
			dark
			prominent
			src="/img/cover.png"
			flat
			:height="$vuetify.breakpoint.height * (3/4)"
			class="user-bar"
		>
			<template v-slot:img="{ props }">
				<v-img v-bind="props" position="top"></v-img>
			</template>

			<template v-slot:extension>
				<div class="primary pa-0" style="width: 100%">
					<v-container class="pa-0">
						<v-row no-gutters>
							<v-col cols="auto" class="relative px-5" style="width: 120px">
								<v-avatar
									size="120px"
									tile
									color="primary"
									style="position: absolute; top: -60%"
								>
									<v-img src="/img/avatar.png" ></v-img>
								</v-avatar>
							</v-col>
							<v-spacer></v-spacer>
							<v-col>
								<v-tabs background-color="primary" right show-arrows class="ma-0 float-right" style="max-width: calc(100% - 140px)">
									<v-tab active-class="secondary darken-4" class="text-capitalize" to="/details">Details</v-tab>
									<v-tab active-class="secondary darken-4" class="text-capitalize" to="/portfolio">Portfolio</v-tab>
									<v-tab active-class="secondary darken-4" class="text-capitalize" to="/availability">Availabilty</v-tab>
									<v-tab active-class="secondary darken-4" class="text-capitalize" to="/pricing-packages">Pricing Packages</v-tab>
									<v-tab active-class="secondary darken-4" class="text-capitalize" to="/reviews">Reviews</v-tab>
								</v-tabs>
							</v-col>
						</v-row>
					</v-container>
				</div>
			</template>
		</v-app-bar>

		<v-container :style="{ 'padding-top': `${($vuetify.breakpoint.height * (3/4)) + 100}px` }">
			<v-row>
				<v-col cols="12">
					<v-row class="px-5">
						<v-col cols="12" md>
							<h1 class="display-2 font-weight-bold secondary--text text--darken-4">
								<span style="font-family: serif !important">Afroshots</span>
								<v-icon size="34" color="blue">mdi-shield-check</v-icon>
							</h1>
						</v-col>
						<v-col cols="12" sm="6" md="auto">
							<v-btn large outlined rounded color="primary" block>Message photographer</v-btn>
						</v-col>
						<v-col cols="12" sm="6" md="auto">
							<v-btn large depressed rounded color="primary" block>Book now</v-btn>
						</v-col>
					</v-row>
				</v-col>

				<v-col cols="12" class="relative">
					<nuxt-child />
				</v-col>
			</v-row>
		</v-container>
	</v-row>
</template>

<script>
export default {}
</script>

<style>
.user-bar .v-toolbar__extension {
	padding: 0 !important;
}
</style>