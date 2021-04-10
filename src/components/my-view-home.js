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
          text-align: center;
          color: var(--mdc-theme-surface);
          text-decoration: none;
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
        <h2>This is the homepage of LitElement Starter Kit</h2>
        <mwc-button
          title="About"
          @click=${() => handleNavigation(PAGES.ABOUT)}
          raised>
            Go to About
        </mwc-button>
        <a href="/foo-bar">Take me to a 404 page</a>
      </div>
    `
  }
}

window.customElements.define('my-view-home', MyViewHome)
