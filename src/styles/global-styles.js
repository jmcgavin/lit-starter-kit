import { css } from 'lit'

export const GlobalStyles = css`
  :host {
    /* Material Theme */
    --mdc-typography-font-family: 'Roboto', Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --mdc-theme-primary: #1DB954;
    --mdc-theme-secondary: #30BCED;
    --mdc-theme-surface: #FFFFFA;
    --mdc-theme-background: #202030;
    --mdc-theme-on-primary: #FFFFFA;
    --mdc-theme-on-secondary: #FFFFFA;
    --mdc-theme-on-surface: #131515;

    /* Status */
    --app-error: #F2545B;
    --app-info: #00A1E4;
    --app-success: #1DB954;
    --app-warning: #F9CB40;
  }
`
