import React from 'react';
import {Link} from 'react-router-dom'
import ApiFetch from './ApiFetch';

class AozoraList extends React.Component {
    render() {
        return (
            <div>
                青空文庫一覧
                <ApiFetch />
            </div>
        );
    }
}

export default AozoraList;
