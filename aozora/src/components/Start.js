import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

class Start extends React.Component {
    render() {
        return (
            <div>
                Start Page
                <Link to={`/Menu`}>Menu</Link>
            </div>
        );
    }
}

export default Start;
