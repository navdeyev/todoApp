import {History} from 'history';
import * as React from 'react';
import {Redirect, Route, Router} from 'react-router';

import PageLayout from 'components/PageLayout/PageLayout';
import TodosContainer from 'components/TodosContainer/TodosContainer';

export interface IProps {
    history: History
}

const RouterComponent: React.SFC<IProps> = (props) => {
    const {history} = props;
    return (
        <Router history={history}>
            <Redirect from="/" to="todos"/>
            <Route path="/" component={PageLayout}>
                <Route path="todos" component={TodosContainer}/>
            </Route>
        </Router>
    );
};

export default RouterComponent;