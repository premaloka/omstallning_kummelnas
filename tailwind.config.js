import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				kummelnas: {
					DEFAULT: "#254F2A",     // green
					primary: "#254F2A",     // green
					secondary: "#EE9702",        // yellow
					["secondary-dark"]: "#D88D0C",  // dark yellow
					hover: "#B0935A",            // bronze
					["primary-light"]: "#85B87D",// light green
					["primary-hover"]: "#3E6343",// medium green
					text: "#2E2D2A",             // black 
					["text-header"]: "#8B3C16",  // brown-reddish
					border: "#C5BDAF",           // beige
					bg: "#EFE9DE",							 // footer beige
					["bg-light"]: "#F7F3EF",
					dark: colors.neutral[800],
					// EFE9DE
					["dark-hover"]: colors.neutral[900]
					
				}
				
			}
		},
		fontFamily: {
			"serif": ["Noto Serif", "serif"],
			// "serif": ["Caslon Libre Text", "serif"],
			"heading": ["Gupter", "serif"]
		},
  },
  plugins: [],
}