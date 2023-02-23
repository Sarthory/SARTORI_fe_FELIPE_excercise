import React from 'react';
import {GlobalContext} from 'context/GlobalContext';
import {render, screen} from '@testing-library/react';
import {Team} from 'types';
import TeamsList from '../TeamsList';

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

describe('TeamsList', () => {
    it('should render teams list correctly', () => {
        const teams = [
            {
                id: '1',
                name: 'Team 1',
            },
            {
                id: '2',
                name: 'Team 2',
            },
        ] as Team[];

        const value = {
            isLoading: false,
        };

        customRender(<TeamsList teamsList={teams} />, {value});

        expect(screen.getByText('Team 1')).toBeInTheDocument();
        expect(screen.getByText('Team 2')).toBeInTheDocument();
    });

    it('should render loading phrase while loading', () => {
        const value = {
            isLoading: true,
        };

        customRender(<TeamsList teamsList={null} />, {value});

        expect(screen.getByText('Loading data...')).toBeInTheDocument();
    });
});
