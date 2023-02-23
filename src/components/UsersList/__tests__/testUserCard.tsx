import React from 'react';
import {render, screen} from '@testing-library/react';
import UserCard from '../UserCard/UserCard';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

const userData = {
    id: '1',
    firstName: 'Felipe',
    lastName: 'Sartori',
    displayName: 'sarthory',
    location: 'Brazil',
    avatar: null,
    teamLeader: true,
};

describe('UserCard', () => {
    it('should render user card correctly', () => {
        render(
            <UserCard setDetailsOpen={jest.fn()} setSelectedUser={jest.fn()} userData={userData} />
        );

        expect(screen.getByTestId('userCard')).toBeInTheDocument();
        expect(screen.getByText('sarthory')).toBeInTheDocument();
        expect(screen.getByText('Brazil')).toBeInTheDocument();
    });

    it('should render a small crown it user is team leader', () => {
        render(
            <UserCard setDetailsOpen={jest.fn()} setSelectedUser={jest.fn()} userData={userData} />
        );

        expect(screen.getByTestId('teamLeader')).toBeInTheDocument();
    });

    it('should not render a small crown it user is team leader', () => {
        const us = {
            ...userData,
        };

        us.teamLeader = false;

        render(<UserCard setDetailsOpen={jest.fn()} setSelectedUser={jest.fn()} userData={us} />);

        expect(screen.queryByTestId('teamLeader')).not.toBeInTheDocument();
    });
});
