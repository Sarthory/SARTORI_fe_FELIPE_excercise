import React, {useEffect, useState} from 'react';
import Header from 'components/Header/Header';
import PageContainer from 'components/PageContainer/PageContainer';
import TeamsList from 'components/TeamsList/TeamsList';
import {Team} from 'types';
import {useGlobalContext} from 'context/GlobalContext';
import {teamsService} from 'services/teamsService';
import SearchBar from 'components/SearchBar/SearchBar';

export default function Home() {
    const {setIsLoading, setTeamsList, setSelectedTeamData} = useGlobalContext();
    const [availableTeams, setAvailableTeams] = useState<Team[]>(null);

    useEffect(() => {
        const getTeams = async () => {
            setIsLoading(true);
            const teams = await teamsService.getAllTeams();
            setTeamsList(teams);
            setAvailableTeams(teams);
            setSelectedTeamData(null);
            setIsLoading(false);
        };

        getTeams();
    }, [setIsLoading, setTeamsList, setSelectedTeamData]);

    return (
        <PageContainer
            header={
                <Header
                    title="Teams"
                    showBackButton={false}
                    searchBar={<SearchBar setFilteredData={setAvailableTeams} scope="teams" />}
                />
            }
        >
            <TeamsList teamsList={availableTeams} />
        </PageContainer>
    );
}
