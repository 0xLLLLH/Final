import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as UserActions from './UserActions';
import './style.scss';

const User = () => (
    <div>
        User
    </div>
);

export default withRouter(
    connect()(User)
);
