import React, {createContext, useContext, useState} from 'react';
import {Team, TeamOverview} from 'types';

interface GlobalContextContract {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;

    teamsList: Team[];
    setTeamsList: (value: Team[]) => void;

    selectedTeamData: TeamOverview;
    setSelectedTeamData: (value: TeamOverview) => void;
}

const GlobalContext = createContext({} as GlobalContextContract);

export default function GlobalContextProvider({children}: any) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [teamsList, setTeamsList] = useState<Team[]>([]);
    const [selectedTeamData, setSelectedTeamData] = useState<TeamOverview>(null);

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,

                teamsList,
                setTeamsList,

                selectedTeamData,
                setSelectedTeamData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}
