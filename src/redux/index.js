import { combineReducers } from 'redux'
import { playList } from './playList'
import { songLIst } from './songLIst'
import { user } from './user_redux'

export const rootReducer = combineReducers({
  playList,
  songLIst,
  user
})

