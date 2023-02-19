import React from 'react';
import {useGlobalContext} from 'context/GlobalContext';
import {Team} from 'types';
import TeamCard from 'components/TeamsList/TeamCard/TeamCard';
import {TeamsListContainer} from './teamsListStyles';

interface Props {
    teamsList: Team[];
}

const TeamsList = ({teamsList}: Props) => {
    const {isLoading} = useGlobalContext();

    return (
        <TeamsListContainer>
            {isLoading && <h5>Loading data...</h5>}
            {!isLoading && teamsList?.map(team => <TeamCard key={team.id} {...team} />)}
        </TeamsListContainer>
    );
};

export default TeamsList;
