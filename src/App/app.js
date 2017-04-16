import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Signup from '../Signup/Signup';
import TodoList from '../TodoList/TodoList';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Link to="/signup">SignUp</Link>
                <Link to="/todos">TodoList</Link>
                <p>Hello World!!!!</p>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Welcome} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/todos" component={TodoList} />
                </div>
            </Router>
        );
    }
}

export default App;
