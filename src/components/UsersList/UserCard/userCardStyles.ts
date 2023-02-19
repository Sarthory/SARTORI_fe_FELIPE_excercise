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
    position: relative;

    &:hover {
        border-color: #aaa;
        background-color: #fafafa;
    }

    .teamLeader {
        width: 25px;
        height: 25px;
        position: absolute;
        top: -13px;
        right: -7px;
        transform: rotate(25deg);

        > svg {
            fill: gold;
        }
    }

    .cardField {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {
            font-size: 14px;
            font-weight: 500;
            color: #ccc;
            margin: 4px 10px;
        }

        > span {
            font-size: 14px;
            font-weight: 500;
            color: #444;
            margin: 4px 10px;
        }
    }
`;
