import React from 'react';
import TeamCard from 'components/TeamCard/TeamCard';
import {useGlobalContext} from 'context/GlobalContext';
import {TeamsListContainer} from './teamsListStyles';

const TeamsList = () => {
    const {teamsList} = useGlobalContext();

    return (
        <TeamsListContainer>
            {teamsList.map(team => (
                <TeamCard key={team.id} {...team} />
            ))}
        </TeamsListContainer>
    );
};

export default TeamsList;
