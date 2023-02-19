import React from 'react';
import {teamsService} from 'services/teamsService';
import {useGlobalContext} from 'context/GlobalContext';
import {useNavigate} from 'react-router-dom';
import {Team} from 'types';
import {Card} from './teamCardStyles';

export default function TeamCard({id, name}: Team) {
    const {setIsLoading, setSelectedTeamData} = useGlobalContext();
    const navigate = useNavigate();

    const handleAcquireTeamData = async () => {
        setIsLoading(true);
        const teamData = await teamsService.getTeamById(id, name);
        setSelectedTeamData(teamData);
        setIsLoading(false);
    };

    return (
        <Card
            id={id}
            title={name}
            onClick={() => {
                handleAcquireTeamData().then(() => navigate('/teamOverview'));
            }}
        >
            <div className="legend">Name:</div>
            <div className="teamName">{name}</div>
        </Card>
    );
}
