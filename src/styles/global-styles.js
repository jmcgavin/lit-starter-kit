import { css } from 'lit-element'

export const GlobalStyles = css`
  :host {
    /* General */
    --app-white: #FFFFFA;
    --app-grey: #757575;
    --app-black: #131515;

    /* Status */
    --app-success: #1DB954;
    --app-warning: #F9CB40;
    --app-error: #F2545B;

    /* Text */
    --app-light-text: var(--app-white);
    --app-medium-text: var(--app-grey);
    --app-dark-text: var(--app-black);
  }
`
