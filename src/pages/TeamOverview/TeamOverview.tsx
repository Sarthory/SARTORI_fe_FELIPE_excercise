import React, {useEffect, useState} from 'react';
import {useGlobalContext} from 'context/GlobalContext';
import PageContainer from 'components/PageContainer/PageContainer';
import Header from 'components/Header/Header';
import UsersList from 'components/UsersList/UsersList';
import SearchBar from 'components/SearchBar/SearchBar';
import {UserData} from 'types';

const TeamOverview = () => {
    const {selectedTeamData} = useGlobalContext();
    const [teamMembers, setTeamMembers] = useState<UserData[]>(selectedTeamData?.teamMemberData);

    useEffect(() => {
        setTeamMembers(selectedTeamData?.teamMemberData);
    }, [selectedTeamData]);

    return (
        <PageContainer
            header={
                <Header
                    title={selectedTeamData?.name}
                    searchBar={<SearchBar setFilteredData={setTeamMembers} scope="users" />}
                    showBackButton
                />
            }
        >
            <UsersList teamMemberData={teamMembers} />
        </PageContainer>
    );
};

export default TeamOverview;
