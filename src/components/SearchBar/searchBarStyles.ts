import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 50px;
    margin: 0 15px;
    background-color: #fff;

    > input {
        border: none;
        outline: none;
        margin: 4px 10px;
        height: 25px;
    }
`;
