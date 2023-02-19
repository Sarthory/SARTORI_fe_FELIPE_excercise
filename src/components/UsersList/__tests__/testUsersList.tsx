import React from 'react';
import {render, screen} from '@testing-library/react';
import UsersList from '../UsersList';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

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

describe('UsersList', () => {
    it('should render users list correctly', () => {
        render(<UsersList teamMemberData={users} />);

        expect(screen.getByText('sarthory')).toBeInTheDocument();
        expect(screen.getByText('007')).toBeInTheDocument();
    });
});
