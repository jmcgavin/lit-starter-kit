import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'
import { store } from './state/store'
import { updateMetadata } from 'pwa-helpers/metadata'
import { installRouter } from 'pwa-helpers/router'
import { GlobalStyles } from './styles/global-styles'
import { navigate } from './state/actions/app'
import { PAGES } from './constants'
import './components/my-view-home'

/**
 * Main app component
 * @extends LitElement
 */
export class LitStarterKit extends connect(store)(LitElement) {
  static get properties () {
    return {
      page: { type: String }
    }
  }

  static get styles () {
    return [
      GlobalStyles,
      css`
        :host {
          height: 100%;
          display: grid;
          grid-template-rows: min-content auto;
        }
        h1 {
          color: var(--mdc-theme-surface);
          margin: 24px;
          text-align: center;
        }
        main > :not([active]) {
          display: none;
        }
        main > * {
          min-height: 100%;
        }
        .page {
          display: none;
          height: 100%;
        }
        .page[active] {
          display: block;
        }
      `
    ]
  }

  constructor () {
    super()
    this.appTitle = 'Lit Starter Kit'
  }

  render () {
    return html`
      <h1>${this.page.toUpperCase().replace('-', ' ')}</h1>
      <main>
        <my-view-home class="page" ?active="${this.page === PAGES.HOME}"></my-view-home>
        <my-view-about class="page" ?active="${this.page === PAGES.ABOUT}"></my-view-about>
        <my-view-404 class="page" ?active="${this.page === PAGES.NOT_FOUND}"></my-view-404>
      </main>
    `
  }

  stateChanged (state) {
    this.page = state.app.page
  }

  /**
   * Initialize router
   */
  firstUpdated () {
    installRouter(location => store.dispatch(navigate(window.decodeURIComponent(location.pathname))))
  }

  /**
   * Update metadata if the page changed
   */
  updated (changedProperties) {
    if (changedProperties.has('page')) {
      const activePage = this.page.charAt(0).toUpperCase() + this.page.slice(1).replace('-', ' ')
      const pageTitle = `${this.appTitle}${this.page !== PAGES.HOME ? ` | ${activePage}` : ''}`
      return updateMetadata({ title: pageTitle, description: pageTitle })
    }
  }
}

window.customElements.define('lit-starter-kit', LitStarterKit)
