import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Index from '../Index/Index';
import TodoList from '../TodoList/TodoList';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/todos" component={TodoList} />
                    <Route path="/:tab" component={Index} />
                    <Route component={Index} />
                </Switch>
            </Router>
        );
    }
}

export default App;
