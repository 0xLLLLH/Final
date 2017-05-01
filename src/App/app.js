import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Index from '../Index/Index';
import TodoList from '../TodoList/TodoList';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/todos" component={TodoList} />
                </div>
            </Router>
        );
    }
}

export default App;
