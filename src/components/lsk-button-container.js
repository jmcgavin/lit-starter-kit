import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'
import { store } from '../state/store'

import '@material/mwc-button'
import { navigate } from '../state/actions/app'
import { PAGES } from '../constants'

/**
 * Component that contains buttons to navigate to page 1 and page 2
 * @extends LitElement
 */
export class ButtonContainer extends LitElement {
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
      mwc-button {
        --mdc-button-horizontal-padding: 24px;
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
        icon="looks_one"
        trailingIcon=true
        title="Page 1"
        @click=${() => store.dispatch(navigate(PAGES.HOME))}
        raised>
          Page
      </mwc-button>
      <mwc-button
        id="page2Button"
        icon="looks_two"
        trailingIcon=true
        title="Page 2"
        @click=${() => store.dispatch(navigate(PAGES.PAGE2))}
        raised>
          Page
      </mwc-button>
    `
  }
}

window.customElements.define('lsk-button-container', ButtonContainer)
