import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';


const Users = ({ users, loading }) => {

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

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}


const UserStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
