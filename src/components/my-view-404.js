import { LitElement, html, css } from 'lit'
import { GlobalStyles } from '../styles/global-styles'
import { handleNavigation } from '../helpers/router'
import { PAGES } from '../constants'
import '@material/mwc-button'

/**
 * 404 view
 * @extends LitElement
 */
export class MyView404 extends LitElement {
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
        <h2>The page you are looking for cannot be found</h2>
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
