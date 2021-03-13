import { UPDATE_PAGE } from './types'
import { PAGES } from '../../constants'

export const navigate = path => async (dispatch, getState) => {
// Extract the page name from path.
  let page = path === '/' ? '/home' : path

  if (/^\/home$/.test(page)) {
    page = PAGES.HOME
  } else {
    page = path.split('/')[1]
    page = getState().app.page
  }

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(updatePage(page))
}

export const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    page
  }
}
