import { combineReducers } from 'redux'
import counter from './shoppinglist'

export const shoppingListApp = combineReducers({
  counter
})

export default shoppingListApp