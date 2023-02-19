import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import SearchBar from 'components/SearchBar/SearchBar';
import Header from '../Header';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Header', () => {
    it('should render header', () => {
        render(<Header title="Header" />);

        expect(screen.getByTestId('pageHeader')).toBeInTheDocument();
    });

    it('should render header with search bar', () => {
        render(
            <Header
                title="Header"
                searchBar={<SearchBar scope="teams" setFilteredData={jest.fn()} />}
            />
        );

        expect(screen.getByTestId('pageHeader')).toBeInTheDocument();
        expect(screen.getByTestId('searchBar')).toBeInTheDocument();
    });

    it('should render back button in header', () => {
        render(<Header title="Header" showBackButton />);

        expect(screen.getByTestId('headerBackButton')).toBeInTheDocument();
    });

    it('should not render back button in header', () => {
        render(<Header title="Header" showBackButton={false} />);

        expect(screen.queryByTestId('headerBackButton')).not.toBeInTheDocument();
    });

    it('should navigate back when back button is clicked', () => {
        render(<Header title="Header" showBackButton />);

        fireEvent.click(screen.getByTestId('headerBackButton'));

        expect(mockUseNavigate).toHaveBeenCalled();
    });
});
