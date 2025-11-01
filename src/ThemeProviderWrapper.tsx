import { createContext, type ReactNode, useContext, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  type Components,
} from "@mui/material/styles";
import { cyan, grey } from "@mui/material/colors";

// Define themes
const themes = {
  secondTheme: createTheme({
    colorSchemes: {
      dark: {
        palette: {
          // Custom palette for secondTheme dark theme
          // https://mui.com/material-ui/customization/palette/#color-schemes
        },
      },
      light: {
        palette: {
          // Custom palette for secondTheme light theme
        },
      },
    },
  }),
  default: createTheme({
		breakpoints: {
			values: {
				mobile: 0,
				tablet: 640,
				laptop: 1024,
				desktop: 1200,
			},
		},
		cssVariables: true,
    colorSchemes: {
      dark: {
        palette: {
          // palette for default dark theme
        },
      },
      light: {
        palette: {
					background: {
						default: '#dff6f7ff',
					},
					primary: {
						main: '#4d858aff',
						dark: '#203840ff',
						light: '#7dc6c3ff',
						contrastText: '#0b1d23ff',
					},
					secondary: {
						main: '#c3e8ed',
						light: cyan[50],
						dark: '#afd6db',
						contrastText: grey[800],
					}
        },
      },
    },
  }),
};

export type Theme = keyof typeof themes;

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeModeContext = createContext<ThemeContextType>({
  theme: "default",
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeModeContext);

type ThemeProviderWrapperProps = {
  children: ReactNode;
};

const ThemeProviderWrapper = ({
  children,
}: Readonly<ThemeProviderWrapperProps>) => {
  const [theme, setTheme] = useState<Theme>("default");

  return (
    <ThemeModeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]} defaultMode="dark">
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProviderWrapper;