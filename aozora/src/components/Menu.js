import React from 'react';
import {
  Link
} from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return (
            <div>
                Menu Page<br />
                <Link to={`/components/AozoraList`}>青空文庫一覧</Link>
            </div>
        );
    }
}

export default Menu;
