import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ui from './ui'

const reducer = combineReducers({
  routing: routerReducer,
  ui
})

export default reducer
