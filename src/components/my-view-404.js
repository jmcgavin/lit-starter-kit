import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'
import { handleNavigation } from '../helpers/router'
import { PAGES } from '../constants'

import '@material/mwc-button'

/**
 * Home view
 * @extends LitElement
 */
export class MyView404 extends LitElement {
  static get styles () {
    return [
      GlobalStyles,
      css`
        #container {
          display: grid;
          height: 100%;
          grid-template-columns: max-content;
          place-content: center;
          justify-items: center;
        }
        h2 {
          color: var(--mdc-theme-surface);
          text-align: center;
        }
        mwc-button {
          width: fit-content;
          --mdc-theme-primary: var(--mdc-theme-secondary);
        }
      `
    ]
  }

  render () {
    return html`
      <div id="container">
        <h2>Oops. The page you are looking for cannot be found.</h2>
        <mwc-button
          title="Home"
          @click=${() => handleNavigation(PAGES.HOME)}
          raised>
            Return home
        </mwc-button>
      </div>
    `
  }
}

window.customElements.define('my-view-404', MyView404)
