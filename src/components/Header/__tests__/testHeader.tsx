import React from 'react';
import {GlobalContext} from 'context/GlobalContext';
import {fireEvent, render, screen} from '@testing-library/react';
import SearchBar from 'components/SearchBar/SearchBar';
import Header from '../Header';

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

describe('Header', () => {
    it('should render header', () => {
        const value = {
            isLoading: false,
        };

        customRender(<Header title="Header" />, {value});

        expect(screen.getByTestId('pageHeader')).toBeInTheDocument();
    });

    it('should render header with search bar', () => {
        const value = {
            isLoading: false,
        };

        customRender(
            <Header
                title="Header"
                searchBar={<SearchBar scope="teams" setFilteredData={jest.fn()} />}
            />,
            {value}
        );

        expect(screen.getByTestId('pageHeader')).toBeInTheDocument();
        expect(screen.getByTestId('searchBar')).toBeInTheDocument();
    });

    it('should render back button in header', () => {
        const value = {
            isLoading: false,
        };

        customRender(<Header title="Header" showBackButton />, {value});

        expect(screen.getByTestId('headerBackButton')).toBeInTheDocument();
    });

    it('should not render back button in header', () => {
        const value = {
            isLoading: false,
        };

        customRender(<Header title="Header" showBackButton={false} />, {value});

        expect(screen.queryByTestId('headerBackButton')).not.toBeInTheDocument();
    });

    it('should show loading phrase while is loading', () => {
        const value = {
            isLoading: true,
        };

        customRender(<Header title="Header" showBackButton={false} />, {value});

        expect(screen.getByText('Loading data...')).toBeInTheDocument();
    });

    it('should navigate back when back button is clicked', () => {
        const value = {
            isLoading: false,
        };

        customRender(<Header title="Header" showBackButton />, {value});

        fireEvent.click(screen.getByTestId('headerBackButton'));

        expect(mockUseNavigate).toHaveBeenCalled();
    });
});
