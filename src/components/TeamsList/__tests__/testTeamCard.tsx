import React from 'react';
import {GlobalContext} from 'context/GlobalContext';
import {teamsService} from 'services/teamsService';
import {fireEvent, render, screen} from '@testing-library/react';
import {Team} from 'types';
import TeamCard from '../TeamCard/TeamCard';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

const customRender = (ui: JSX.Element, {value, ...renderOptions}) => {
    return render(
        <GlobalContext.Provider value={value}>{ui}</GlobalContext.Provider>,
        renderOptions
    );
};

describe('TeamCard', () => {
    it('should render team card correctly', () => {
        const team = {
            id: '1',
            name: 'Team 1',
        } as Team;

        const value = {
            setIsLoading: jest.fn(),
        };

        customRender(<TeamCard teamData={team} />, {value});

        expect(screen.getByText('Team 1')).toBeInTheDocument();
    });

    it('should acquire team data and navigate when card is clicked', () => {
        jest.spyOn(teamsService, 'getTeamById').mockResolvedValue({
            id: '1',
            teamLeadId: '1',
            teamMemberIds: ['1'],
        });

        const team = {
            id: '1',
            name: 'Team 1',
        } as Team;

        const value = {
            setIsLoading: jest.fn(),
            setSelectedTeamData: jest.fn(),
        };

        customRender(<TeamCard teamData={team} />, {value});

        fireEvent.click(screen.getByText('Team 1'));

        expect(mockUseNavigate).toHaveBeenCalledWith('/teamOverview');
    });
});
