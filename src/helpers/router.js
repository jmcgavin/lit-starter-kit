import { store } from '../state/store'
import { navigate } from '../state/actions/app'

export const handleNavigation = page => {
  window.history.pushState({}, '', `/${page}`)
  store.dispatch(navigate(`/${page}`))
}
