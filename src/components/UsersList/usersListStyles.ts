import styled from 'styled-components';

export const UsersListContainer = styled.div`
    padding: 15px 0;
    max-height: 480px;
    overflow-x: auto;
    text-align: center;
    display: grid;
    grid-gap: 10px;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    justify-content: center;
`;
