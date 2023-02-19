import React from 'react';
import {Team} from 'types';
import TeamCard from 'components/TeamsList/TeamCard/TeamCard';
import {TeamsListContainer} from './teamsListStyles';

interface Props {
    teamsList: Team[];
}

const TeamsList = ({teamsList}: Props) => {
    return (
        <TeamsListContainer>
            {teamsList?.map(team => (
                <TeamCard key={team.id} {...team} />
            ))}
        </TeamsListContainer>
    );
};

export default TeamsList;
