import React from 'react';
import {teamsService} from 'services/teamsService';
import {GlobalContext} from 'context/GlobalContext';
import {render, screen, waitFor} from '@testing-library/react';
import Home from '../Home';

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

describe('Home', () => {
    it('should render the home page correctly', async () => {
        jest.spyOn(teamsService, 'getAllTeams').mockResolvedValue([
            {
                id: '1',
                name: 'Team 1',
            },
            {
                id: '2',
                name: 'Team 2',
            },
        ]);

        const value = {
            setIsLoading: jest.fn(),
            setSelectedTeamData: jest.fn(),
            setTeamsList: jest.fn(),
        };

        customRender(<Home />, {value});

        await waitFor(() => {
            expect(screen.getByTestId('pageContainer')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByTestId('pageHeader')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText('Team 2')).toBeInTheDocument();
        });
    });
});
