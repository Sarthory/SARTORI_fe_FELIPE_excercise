import React, {useState} from 'react';
import {useGlobalContext} from 'context/GlobalContext';
import {UserData} from 'types';
import UserDeatailModal from 'components/UserDeatailModal/UserDeatailModal';
import UserCard from 'components/UsersList/UserCard/UserCard';
import {UsersListContainer} from './usersListStyles';

interface Props {
    teamMemberData: UserData[];
}

const UsersList = ({teamMemberData}: Props) => {
    const {isLoading} = useGlobalContext();
    const [userDetailModalOpen, setUserDetailModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<UserData>(null);

    return (
        <>
            <UsersListContainer>
                {isLoading && <h5>Loading data...</h5>}
                {!isLoading &&
                    teamMemberData?.map(user => {
                        return (
                            <UserCard
                                key={user.id}
                                userData={user}
                                setDetailsOpen={setUserDetailModalOpen}
                                setSelectedUser={setSelectedUser}
                            />
                        );
                    })}
            </UsersListContainer>

            <UserDeatailModal
                isOpen={userDetailModalOpen}
                setIsOpen={setUserDetailModalOpen}
                userData={selectedUser}
            />
        </>
    );
};

export default UsersList;
