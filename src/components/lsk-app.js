import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'

import '@material/mwc-button'

import './lsk-button-container'

/**
 * Main app component
 * @extends LitElement
 */
export class App extends LitElement {
  static get styles () {
    return [
      GlobalStyles,
      css`
      :host {
        display: grid;
        height: 100%;
      }
      `
    ]
  }

  render () {
    return html`
      <lsk-button-container></lsk-button-container>
    `
  }
}

window.customElements.define('lsk-app', App)
