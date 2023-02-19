import React from 'react';
import {UserData} from 'types';
import UserCard from 'components/UsersList/UserCard/UserCard';
import {UsersListContainer} from './usersListStyles';

interface Props {
    teamMemberData: UserData[];
}

const UsersList = ({teamMemberData}: Props) => {
    return (
        <UsersListContainer>
            {teamMemberData?.map(user => {
                return <UserCard key={user.id} {...user} />;
            })}
        </UsersListContainer>
    );
};

export default UsersList;
