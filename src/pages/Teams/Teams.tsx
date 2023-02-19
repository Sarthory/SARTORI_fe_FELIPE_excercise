import React, {useEffect} from 'react';
import {ListItem, Team} from 'types';
import {teamsService} from 'services/teamsService';
import {useGlobalContext} from 'context/GlobalContext';
import Header from '../../components/Header/Header';
import List from '../../components/TeamsList/TeamsList';
import {Container} from '../../components/GlobalComponents';

var MapT = (teams: Team[]) => {
    return teams.map(team => {
        var columns = [
            {
                key: 'Name',
                value: team.name,
            },
        ];
        return {
            id: team.id,
            url: `/team/${team.id}`,
            columns,
            navigationProps: team,
        } as ListItem;
    });
};

const Teams = () => {
    const {setIsLoading, teamsList, setTeamsList} = useGlobalContext();

    useEffect(() => {
        const getTeams = async () => {
            setIsLoading(true);
            const teams = await teamsService.getAllTeams();
            setTeamsList(teams);
            setIsLoading(false);
        };

        getTeams();
    }, [setIsLoading, setTeamsList]);

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <List items={MapT(teamsList)} />
        </Container>
    );
};

export default Teams;
