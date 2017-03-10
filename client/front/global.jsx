import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Index from '../container/index'


const history = createBrowserHistory();


ReactDOM.render(
	<Router history={history}>
		<Route path="/">
			<IndexRoute component={Index} />
		</Route>
	</Router>,
	document.getElementById('example')
);