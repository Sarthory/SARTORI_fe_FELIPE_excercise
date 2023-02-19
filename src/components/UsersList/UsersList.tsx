import React from 'react';
import {useGlobalContext} from 'context/GlobalContext';
import UserCard from 'components/UserCard/UserCard';
import {UsersListContainer} from './usersListStyles';

const UsersList = () => {
    const {selectedTeamData} = useGlobalContext();

    return (
        <UsersListContainer>
            {selectedTeamData?.teamMemberData.map(user => {
                return <UserCard key={user.id} {...user} />;
            })}
        </UsersListContainer>
    );
};

export default UsersList;
