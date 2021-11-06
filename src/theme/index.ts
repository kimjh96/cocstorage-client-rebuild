import baseStyled, { ThemedStyledInterface } from 'styled-components';

// Themes
import Light from 'src/theme/light';
import Dark from 'src/theme/dark';

export const LightTheme = Light;
export const DarkTheme = Dark;

export type Theme = typeof LightTheme | typeof DarkTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
