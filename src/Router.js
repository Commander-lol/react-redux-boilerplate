import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from 'views/App'

export default () => (
	<Router history={browserHistory}>
		<Route path="/" component={App}>

		</Route>
	</Router>
)
