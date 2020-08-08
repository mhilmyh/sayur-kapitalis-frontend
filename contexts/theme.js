import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			primary: {
				light: "#48bb78",
				main: "#48bb78",
				dark: "#002884",
				contrastText: "#fff",
			},
			secondary: {
				light: "#ff7961",
				main: "#f44336",
				dark: "#ba000d",
				contrastText: "#000",
			},
		},
		typography: {
			fontFamily: [
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},
	})
);
