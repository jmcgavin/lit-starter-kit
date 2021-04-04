import { LitElement, html, css } from 'lit-element'
import { GlobalStyles } from '../styles/global-styles'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../state/store'
import { installRouter } from 'pwa-helpers/router'
import { updateMetadata } from 'pwa-helpers/metadata'
import { navigate } from '../state/actions/app'
import { PAGES } from '../constants'
import './my-button-container'

/**
 * Root component of the app
 * @extends LitElement
 */
export class MyApp extends connect(store)(LitElement) {
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
    this.appTitle = 'LitElement Starter Kit'
  }

  render () {
    return html`
    <main>
      <my-button-container class="page" ?active="${this._page === 'home'}"></my-button-container>
      <my-view-redux-sample class="page" ?active="${this._page === 'redux-sample'}"></my-view-redux-sample>
      <my-view-404 class="page" ?active="${this._page === '404'}"></my-view-404>
    </main>
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
    if (changedProps.has('_page')) {
      const activePage = this._page.charAt(0).toUpperCase() + this._page.slice(1)
      const pageTitle = `${this.appTitle}${activePage !== 'home' ? ` | ${activePage}` : ''}`
      return updateMetadata({ title: pageTitle, description: pageTitle })
    }
  }

  stateChanged (state) {
    this._page = state.app.page
  }
}

window.customElements.define('my-app', MyApp)
