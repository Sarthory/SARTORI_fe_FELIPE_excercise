import React from 'react';
import {useGlobalContext} from 'context/GlobalContext';
import PageContainer from 'components/PageContainer/PageContainer';
import Header from 'components/Header/Header';
import UsersList from 'components/UsersList/UsersList';

const TeamOverview = () => {
    const {selectedTeamData} = useGlobalContext();

    return (
        <PageContainer header={<Header title={selectedTeamData?.name} showBackButton />}>
            <UsersList />
        </PageContainer>
    );
};

export default TeamOverview;
