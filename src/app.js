import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from './styles/global-styles'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from './state/store'
import { installRouter } from 'pwa-helpers/router'
import { updateMetadata } from 'pwa-helpers/metadata'
import { navigate } from './state/actions/app'
import { PAGES } from './constants'
import './components/hello-world'

export class App extends connect(store)(LitElement) {
  static get properties () {
    return {
      _page: { type: String }
    }
  }

  static get styles () {
    return [
      GlobalStyles,
      css``
    ]
  }

  constructor () {
    super()
    this._page = PAGES.HOME
  }

  render () {
    return html`
      <hello-world></hello-world>
    `
  }

  /**
   * Initialize router
   */
  firstUpdated () {
    installRouter(location => store.dispatch(navigate(window.decodeURIComponent(location.pathname))))
  }

  /**
   * Update metadata if the app title changed
   */
  updated (changedProps) {
    const activePage = this._page.charAt(0).toUpperCase() + this._page.slice(1)
    const pageTitle = `${this.appTitle} | ${activePage}`
    if (changedProps.has('_page')) {
      return updateMetadata({ title: pageTitle, description: pageTitle })
    }
  }

  stateChanged (state) {
    this._page = state.app.page
  }
}

window.customElements.define('app', App)
