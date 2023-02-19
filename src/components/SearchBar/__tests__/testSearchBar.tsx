import React from 'react';
import {GlobalContext} from 'context/GlobalContext';
import {render, screen} from '@testing-library/react';
import SearchBar from '../SearchBar';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

const customRender = (children: JSX.Element, {value, ...renderOptions}) => {
    return render(
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>,
        renderOptions
    );
};

describe('SearchBar', () => {
    it('should render the search bar correctly', () => {
        const value = {
            teamsList: [],
            selectedTeamData: [],
        };

        customRender(<SearchBar scope="teams" setFilteredData={jest.fn()} />, {value});

        expect(screen.getByTestId('searchBar')).toBeInTheDocument();
    });
});
