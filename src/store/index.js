import { createStore, combineReducers } from 'redux'

import { routerReducer as routing } from 'react-router-redux'

const root = combineReducers({
	routing,
})

export default createStore(root)
