import React from 'react';
import {useGlobalContext} from 'context/GlobalContext';
import {SearchContainer} from './searchBarStyles';

interface Props {
    scope: string;
    setFilteredData: React.Dispatch<React.SetStateAction<any>>;
}

export default function SearchBar({scope, setFilteredData}: Props) {
    const {teamsList, selectedTeamData} = useGlobalContext();

    const handleFilterData = (query: string) => {
        let filtered = [];

        switch (scope) {
            case 'teams': {
                if (query.length >= 3) {
                    filtered = teamsList?.filter(item => item.name.toLowerCase().includes(query));
                    setFilteredData(filtered);
                } else {
                    setFilteredData(teamsList);
                }

                break;
            }

            case 'users': {
                const {teamMemberData} = selectedTeamData;

                if (query.length >= 3) {
                    filtered = teamMemberData?.filter(item => {
                        const fullName = `${item.firstName} ${item.lastName}`;
                        return fullName.toLowerCase().includes(query) ? item : null;
                    });
                    setFilteredData(filtered);
                } else {
                    setFilteredData(teamMemberData);
                }

                break;
            }

            default: {
                break;
            }
        }
    };

    return (
        <SearchContainer data-testid="searchBar">
            <input
                type="search"
                placeholder="Search by name"
                onChange={e => {
                    handleFilterData(e.target.value);
                }}
            />
        </SearchContainer>
    );
}
