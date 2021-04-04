import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'
import { handleNavigation } from '../helpers/router'
import { PAGES } from '../constants'

import '@material/mwc-button'

/**
 * Component that contains buttons to navigate to page 1 and page 2
 * @extends LitElement
 */
export class MyButtonContainer extends LitElement {
  static get styles () {
    return [
      GlobalStyles,
      css`
      :host {
        display: grid;
        height: fit-content;
        grid-template-columns: max-content max-content;
        gap: 16px;
        justify-content: center;
        align-self: center;
      }
      #page2Button {
        --mdc-theme-primary: var(--mdc-theme-secondary);
      }
      `
    ]
  }

  render () {
    return html`
      <mwc-button
        id="page1Button"
        title="Page 1"
        @click=${() => handleNavigation(PAGES.HOME)}
        raised>
          Page One
      </mwc-button>
      <mwc-button
        id="page2Button"
        title="Page 2"
        @click=${() => handleNavigation(PAGES.PAGE2)}
        raised>
          Page Two
      </mwc-button>
    `
  }
}

window.customElements.define('my-button-container', MyButtonContainer)
