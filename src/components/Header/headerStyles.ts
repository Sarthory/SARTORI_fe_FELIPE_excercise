import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 100px;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 8px #ccc;
`;

export const Title = styled.h1`
    flex: 1;
    text-align: center;
    color: #444;
    margin-right: -185px;
`;

export const BackButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-weight: bold;
    cursor: pointer;
    width: 50px;
    height: 50px;

    > svg {
        width: 35px;
        height: 35px;
        fill: #444;
    }
`;
