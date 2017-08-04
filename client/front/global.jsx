import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Layouts from '../components/layout/index';
import Index from '../container/index'
import Page from '../components/page';
const history = createBrowserHistory();


ReactDOM.render(
	<Router history={history}>
		<Route component={Layouts}>
			<Route component={Index} path="/"/>
			<Route component={Page} path="/page"/>
		</Route>
	</Router>,
	document.getElementById('example')
);