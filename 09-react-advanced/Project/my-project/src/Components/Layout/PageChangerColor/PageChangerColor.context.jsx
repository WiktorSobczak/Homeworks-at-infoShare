import { createContext, useState } from "react";

export const ThemeContext = createContext({
	isDarkMode: false,
	toggleDarkMode: () => {},
});

export const PageChangerColorProvider = ({ children }) => {
	const [isDarkModeEnabled, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkModeEnabled)
	};

	const themes = {
		light: {
			foreground: "#202c37",
			background: "#fafafa",
			backgroundBox: "#ffffff",
			colorTextSearch: "#858585",
			boxShadow:" 0px 0px 6px 1px #858585"
		},
		dark: {
			foreground: "#ffffff",
			background: "#202c37",
			backgroundBox: "#2b3945",
			colorTextSearch: "#fafafa",
			boxShadow:" 0px 0px 6px 1px #111517f"
		},
		
	};

	return (
		<ThemeContext.Provider
			value={{
				isDarkMode: isDarkModeEnabled,
				currentTheme: isDarkModeEnabled ? themes.dark : themes.light,
				toggleDarkMode
			}}>
			{children}
		</ThemeContext.Provider>
	);
};