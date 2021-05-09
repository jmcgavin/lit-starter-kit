import { LitElement, html, css } from 'lit'
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
        }
        a {
          color: var(--mdc-theme-surface);
          text-decoration: none;
          text-align: center;
          position: absolute;
          bottom: 12px;
          left: 0;
          right: 0;
        }
        a:hover {
          text-decoration: underline;
        }
      `
    ]
  }

  render () {
    return html`
      <div id="gridContainer">
        <h2>This is the homepage of Lit Starter Kit</h2>
        <mwc-button
          title="About"
          @click=${() => handleNavigation(PAGES.ABOUT)}
          raised>
            Go to About
        </mwc-button>
      </div>
      <a href="/foo-bar">Take me to a 404 page</a>
    `
  }
}

window.customElements.define('my-view-home', MyViewHome)
