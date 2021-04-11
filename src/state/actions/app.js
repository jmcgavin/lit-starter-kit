import { UPDATE_PAGE } from './types'
import { PAGES } from '../../constants'

export const navigate = path => async (dispatch, getState) => {
  // Extract the page name from path
  let page = path === '/' ? '/home' : path

  if (/^\/home$/.test(page)) {
    page = PAGES.HOME
  } else if (/^\/about/.test(page)) {
    page = PAGES.ABOUT
  } else {
    page = PAGES.NOT_FOUND
  }

  getState().app.page !== page && dispatch(loadPage(page))
}

const loadPage = page => async dispatch => {
  switch (page) {
    case PAGES.HOME:
      await import('../../components/my-view-home.js')
      break
    case PAGES.ABOUT:
      import('../../components/my-view-about.js')
      break
    case PAGES.NOT_FOUND:
    default:
      import('../../components/my-view-404.js')
  }

  dispatch(updatePage(page))
}

const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    payload: page
  }
}
