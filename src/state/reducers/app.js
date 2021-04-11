import { UPDATE_PAGE } from '../actions/types'
import { PAGES } from '../../constants'

const initialState = {
  page: PAGES.HOME
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state
  }
}
