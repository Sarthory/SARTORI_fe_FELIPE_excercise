import React from 'react';
import {GlobalContext} from 'context/GlobalContext';
import {render, screen} from '@testing-library/react';
import Loader from '../Loader';

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

describe('Loader', () => {
    it('should render the loader', () => {
        const value = {
            isLoading: true,
        };
        customRender(<Loader />, {value});
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('should not render the loader', () => {
        const value = {
            isLoading: false,
        };
        customRender(<Loader />, {value});
        expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
});
