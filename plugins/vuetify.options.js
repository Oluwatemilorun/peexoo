import colors from 'vuetify/es5/util/colors';
import "@mdi/font/css/materialdesignicons.min.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

const theme = {
	dark: false,
	themes: {
		light: {
			primary: '#E09B34',
			secondary: colors.grey.base,
			tertiary: colors.teal.darken4,
			accent: colors.brown.darken1
		}
	}
}

export default {
	// breakpoint: {},
	icons: { iconfont: 'mdi' },
	theme
}