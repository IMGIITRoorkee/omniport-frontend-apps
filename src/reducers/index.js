import { combineReducers } from 'redux'
import AppList from './appList'

const rootReducers = combineReducers({
  appList: AppList
})

export default rootReducers
