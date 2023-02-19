import React from 'react';
import {GlobalContext} from 'context/GlobalContext';
import {render, screen} from '@testing-library/react';
import TeamOverview from '../TeamOverview';

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

describe('TeamOverview', () => {
    it('should render the team overview page correctly', () => {
        const value = {
            selectedTeamData: null,
        };

        customRender(<TeamOverview />, {value});

        expect(screen.getByTestId('pageContainer')).toBeInTheDocument();
        expect(screen.getByTestId('pageHeader')).toBeInTheDocument();
    });
});
