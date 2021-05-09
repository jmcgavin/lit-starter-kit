import { LitElement, html, css } from 'lit'
import { GlobalStyles } from '../styles/global-styles'
import { handleNavigation } from '../helpers/router'
import { PAGES } from '../constants'
import '@material/mwc-button'

/**
 * About view
 * @extends LitElement
 */
export class MyViewAbout extends LitElement {
  static get styles () {
    return [
      GlobalStyles,
      css`
        #gridContainer {
          display: grid;
          height: 100%;
          grid-template-columns: max-content;
          place-content: center;
          justify-items: center;
          gap: 24px;
        }
        h2 {
          color: var(--mdc-theme-surface);
          text-align: center;
          margin: 0;
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
      <div id="gridContainer">
        <h2>This is the about page</h2>
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

window.customElements.define('my-view-about', MyViewAbout)
