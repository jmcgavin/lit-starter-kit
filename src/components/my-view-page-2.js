import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'
import { handleNavigation } from '../helpers/router'
import { PAGES } from '../constants'

import '@material/mwc-button'

/**
 * Page 2 view
 * @extends LitElement
 */
export class MyViewPage2 extends LitElement {
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
        <h2>This is the second page.</h2>
        <mwc-button
          title="Home"
          @click=${() => handleNavigation(PAGES.HOME)}
          raised>
            Go to Home
        </mwc-button>
      </div>
    `
  }
}

window.customElements.define('my-view-page-2', MyViewPage2)
