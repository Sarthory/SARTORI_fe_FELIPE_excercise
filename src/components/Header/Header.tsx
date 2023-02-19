import {useGlobalContext} from 'context/GlobalContext';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {HeaderContainer, BackButton, Title} from './headerStyles';

interface Props {
    title: string;
    showBackButton?: boolean;
    searchBar?: JSX.Element;
}

const Header = ({title, searchBar, showBackButton = true}: Props) => {
    const {isLoading} = useGlobalContext();
    const navigate = useNavigate();

    return (
        <HeaderContainer data-testid="pageHeader">
            {showBackButton && (
                <BackButton
                    data-testid="headerBackButton"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>Back</title>
                        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                    </svg>
                </BackButton>
            )}

            <Title>{isLoading ? 'Loading data...' : title}</Title>

            {searchBar}
        </HeaderContainer>
    );
};

export default Header;
