import React from 'react';
import {teamsService} from 'services/teamsService';
import {useGlobalContext} from 'context/GlobalContext';
import {useNavigate} from 'react-router-dom';
import {Team} from 'types';
import {Card} from './teamCardStyles';

interface Props {
    teamData: Team;
}

export default function TeamCard({teamData}: Props) {
    const {id, name} = teamData;
    const {setIsLoading, setSelectedTeamData} = useGlobalContext();
    const navigate = useNavigate();

    const handleAcquireTeamData = async () => {
        setIsLoading(true);
        const team = await teamsService.getTeamById(id, name);
        setSelectedTeamData(team);
        setIsLoading(false);
    };

    return (
        <Card
            id={id}
            title={name}
            onClick={() => {
                handleAcquireTeamData();
                navigate('/teamOverview');
            }}
        >
            <div className="legend">Name:</div>
            <div className="teamName">{name}</div>
        </Card>
    );
}
