import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from 'components/Header/Header';
import PageContainer from '../PageContainer';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('PageContainer', () => {
    it('should render page container with a header', () => {
        render(
            <PageContainer header={<Header title="test" />}>
                <div />
            </PageContainer>
        );

        expect(screen.getByTestId('pageContainer')).toBeInTheDocument();
        expect(screen.getByTestId('pageHeader')).toBeInTheDocument();
    });
});
