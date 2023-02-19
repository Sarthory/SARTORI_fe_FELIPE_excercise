import {useGlobalContext} from 'context/GlobalContext';
import React from 'react';
import {UserData} from 'types';
import {Card} from './userCardStyles';

export default function UserCard(user: UserData) {
    const {id, firstName, lastName, displayName, location, teamLeader} = user;
    const {setIsLoading} = useGlobalContext();

    return (
        <Card
            id={id}
            title={`${firstName} ${lastName}`}
            onClick={() => {
                setIsLoading(true);
            }}
        >
            {teamLeader && (
                <div className="teamLeader" title="Team leader">
                    <svg viewBox="0 0 24 24">

                        <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                    </svg>
                </div>
            )}

            <div className="cardField">
                <div>Name:</div>
                <span>{`${firstName} ${lastName}`}</span>
            </div>

            <div className="cardField">
                <div>Display name:</div>
                <span>{displayName}</span>
            </div>

            <div className="cardField">
                <div>Location:</div>
                <span>{location}</span>
            </div>
        </Card>
    );
}
