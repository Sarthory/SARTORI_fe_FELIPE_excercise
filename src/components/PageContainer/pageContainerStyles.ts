import styled from 'styled-components';

export const Container = styled.main`
    margin: 20px auto;
    width: 90%;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;

    .children {
        flex: 1;
        width: 100%;
    }
`;
