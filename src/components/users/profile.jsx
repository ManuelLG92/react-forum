import React from 'react';
import {UserContext} from  './components/users/userContext'

const UserProfile = () => {
    const user = React.useContext(UserContext)
    return (
        <div>
            {user}
        </div>
    )
}

export default UserProfile