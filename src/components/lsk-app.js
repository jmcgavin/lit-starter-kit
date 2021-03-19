import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'

import '@material/mwc-button'
import '@material/mwc-icon-button'
import '@material/mwc-top-app-bar'

import { github } from './lsk-icons'

/**
 * App
 * @extends LitElement
 */
export class App extends LitElement {
  static get styles () {
    return [
      GlobalStyles,
      css``
    ]
  }

  constructor () {
    super()
    this.appTitle = ''
  }

  render () {
    return html`
      <mwc-top-app-bar centerTitle>
        <mwc-icon-button icon="double_arrow" slot="navigationIcon"></mwc-icon-button>
        <div slot="title">${this.appTitle}</div>
        <mwc-icon-button slot="actionItems">${github}</mwc-icon-button>
    </mwc-top-app-bar>
    `
  }
}

window.customElements.define('lsk-app', App)
