import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark"
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}>({
  theme: {} as Theme,
  setTheme: () => {}
});

export const LOCAL_STORAGE_THEME_KEY = "theme";
