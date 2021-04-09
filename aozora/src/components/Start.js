import React from 'react';
import { Link } from 'react-router-dom'

class Start extends React.Component {
    render() {
        return (
            <div>
                Start Page<br />
                <Link to={`/components/Menu`}>Menu</Link>
            </div>
        );
    }
}

export default Start;
