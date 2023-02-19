import styled from 'styled-components';

export const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;
    width: 95%;
    cursor: pointer;

    &:hover {
        border-color: #aaa;
        background-color: #fafafa;
    }

    .legend {
        margin: 10px;
        font-size: 14px;
        font-weight: 500;
        color: #ccc;
        margin-bottom: 5px;
    }

    .teamName {
        color: #444;
        font-weight: 600;
        font-size: 16px;
        margin: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 220px;
    }
`;
