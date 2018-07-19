import { Router, Route} from 'react-router'
import StronaA from './modules/StronaA'
import StronaB from './modules/StronaB'
import StronaC from './modules/StronaC'


function Container({ location }) {
    return (
        <section className="route-section">

        <Route path="/" component={App}>
        <Route path="/stronaa" component={StronaA} />
        <Route path="/stronab" component={StronaB} />
        <Route path="/stronac" component={StronaC} />

        </section>
        )
}