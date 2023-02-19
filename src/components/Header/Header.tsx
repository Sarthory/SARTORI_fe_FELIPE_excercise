import React from 'react';
import {useNavigate} from 'react-router-dom';
import {HeaderContainer, BackButton, Title} from './headerStyles';

interface Props {
    title: string;
    showBackButton?: boolean;
}

const Header = ({title, showBackButton = true}: Props) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            {showBackButton && (
                <BackButton
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
            <Title>{title}</Title>
        </HeaderContainer>
    );
};

export default Header;
