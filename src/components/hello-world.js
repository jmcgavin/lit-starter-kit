import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'

/**
 * Hello World component
 * @extends LitElement
 */
export class HelloWorld extends LitElement {
  static get styles () {
    return [
      GlobalStyles,
      css``
    ]
  }

  render () {
    return html`
      <h1>Hello world</h1>
    `
  }
}

window.customElements.define('hello-world', HelloWorld)
