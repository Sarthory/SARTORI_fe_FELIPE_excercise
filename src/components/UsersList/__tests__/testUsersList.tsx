import React from 'react';
import {GlobalContext} from 'context/GlobalContext';
import {render, screen} from '@testing-library/react';
import UsersList from '../UsersList';

const mockUseNavigate = jest.fn();

const users = [
    {
        id: '1',
        firstName: 'Felipe',
        lastName: 'Sartori',
        displayName: 'sarthory',
        location: 'Brazil',
        avatar: null,
        teamLeader: true,
    },
    {
        id: '2',
        firstName: 'James',
        lastName: 'Bond',
        displayName: '007',
        location: 'United States of America',
        avatar: null,
        teamLeader: false,
    },
];

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

describe('UsersList', () => {
    it('should render users list correctly', () => {
        const value = {
            isLoading: false,
        };

        customRender(<UsersList teamMemberData={users} />, {value});

        expect(screen.getByText('sarthory')).toBeInTheDocument();
        expect(screen.getByText('007')).toBeInTheDocument();
    });

    it('should render loading phrase while loading is true', () => {
        const value = {
            isLoading: true,
        };

        customRender(<UsersList teamMemberData={null} />, {value});

        expect(screen.getByText('Loading data...')).toBeInTheDocument();
    });
});
