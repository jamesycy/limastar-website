// @flow
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { FAQProvider } from './util/faq'
import { Provider } from './util/provider'

import AppBar from './widget/appbar/AppBar'

import HomePageComponent from './screen/home/home';
import NotFound from './screen/notfound/NotFound';
import HelpersPage from './screen/helpers/helpers';
import HelperDetail from './screen/helper_details/helper_detail';
import InfoPage from './screen/info/info';
import ContactsPage from './screen/contacts/contacts';

export default class App extends React.Component<any> {
    render() {
        return (
            <Router>
                <Provider>
                    <FAQProvider>
                        <React.Fragment>
                            <AppBar/>
                            <div style={{ marginTop: 70 }}>
                                <Switch>
                                    <Route exact path="/" component={HomePageComponent} />
                                    <Route exact path="/helpers" component={HelpersPage} />
                                    <Route exact path="/helpers/:id" component={HelperDetail} />
                                    <Route exact path="/info" component={InfoPage} />
                                    <Route exact path="/contacts" component={ContactsPage} />
                                    <Route path="**" component={NotFound} />
                                </Switch>
                            </div>
                        </React.Fragment>
                    </FAQProvider>
                </Provider>
            </Router>
        )
    }
}