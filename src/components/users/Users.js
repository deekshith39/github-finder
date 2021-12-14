import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;
    return (
        <div>
            {
                loading ? <Spinner /> :
                    <div style={UserStyle}>
                        {users.map(user => (
                            <UserItem key={user.id} user={user} />
                        ))}
                    </div>
            }
        </div>
    )

}

const UserStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
