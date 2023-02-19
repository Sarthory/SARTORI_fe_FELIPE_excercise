import React from 'react';
import {render, screen} from '@testing-library/react';
import UserDeatailModal from '../UserDeatailModal';

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

describe('UserDetailModal', () => {
    it('should render a modal containing user info', () => {
        render(<UserDeatailModal isOpen setIsOpen={jest.fn()} userData={userData} />);

        expect(screen.getByTestId('userModal')).toBeInTheDocument();
        expect(screen.getByText('sarthory')).toBeInTheDocument();
        expect(screen.getByText('Brazil')).toBeInTheDocument();
    });

    it('should not render the modal if isOpen=false', () => {
        render(<UserDeatailModal isOpen={false} setIsOpen={jest.fn()} userData={null} />);

        expect(screen.queryByTestId('userModal')).not.toBeInTheDocument();
    });
});
