import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'
import { handleNavigation } from '../helpers/router'
import { PAGES } from '../constants'

import '@material/mwc-button'

/**
 * Home view
 * @extends LitElement
 */
export class MyViewHome extends LitElement {
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
        }
      `
    ]
  }

  render () {
    return html`
      <div id="container">
        <h2>This is the homepage.</h2>
        <mwc-button
          title="Page 2"
          @click=${() => handleNavigation(PAGES.PAGE_2)}
          raised>
            Go to Page Two
        </mwc-button>
      </div>
    `
  }
}

window.customElements.define('my-view-home', MyViewHome)
