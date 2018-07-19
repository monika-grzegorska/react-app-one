import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import App from './modules/App'
import StronaA from './modules/StronaA'
import StronaB from './modules/StronaB'
import StronaC from './modules/StronaC'



render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/stronaa" component={StronaA} />
            <Route path="/stronab" component={StronaB} />
            <Route path="/stronac" component={StronaC} />
        </Route>
    </Router>
), document.getElementById('app'))
