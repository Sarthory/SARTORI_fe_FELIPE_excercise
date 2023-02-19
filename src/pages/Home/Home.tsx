import React, {useEffect} from 'react';
import Header from 'components/Header/Header';
import PageContainer from 'components/PageContainer/PageContainer';
import TeamsList from 'components/TeamsList/TeamsList';
import {useGlobalContext} from 'context/GlobalContext';
import {teamsService} from 'services/teamsService';

export default function Home() {
    const {setIsLoading, setTeamsList, setSelectedTeamData} = useGlobalContext();

    useEffect(() => {
        const getTeams = async () => {
            setIsLoading(true);
            const teams = await teamsService.getAllTeams();
            setTeamsList(teams);
            setSelectedTeamData(null);
            setIsLoading(false);
        };

        getTeams();
    }, [setIsLoading, setTeamsList, setSelectedTeamData]);

    return (
        <PageContainer header={<Header title="Teams" showBackButton={false} />}>
            <TeamsList />
        </PageContainer>
    );
}
