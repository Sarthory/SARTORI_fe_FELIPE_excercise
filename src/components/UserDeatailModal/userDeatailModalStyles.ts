import styled from 'styled-components';

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: #ffffff98;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    width: 380px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 8px #ccc;
    padding: 20px;
    color: #444;

    .modalHeader {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        > svg {
            width: 65px;
            height: 65px;
            fill: #999;
        }

        > h2 {
            flex: 1;
            text-align: left;
            margin-left: 20px;
        }
    }

    .modalBody {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-flow: column;
        width: 100%;

        .bodyField {
            font-size: 18px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin: 10px 10px;
            width: 100%;

            > div {
                color: #ccc;
                margin-right: 15px;
            }
        }
    }

    .modalFooter {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 40px;

        .closeBtn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            background-color: #fff;
            border: 1px solid #ccc;
            height: 35px;
            border-radius: 50px;
            cursor: pointer;

            &:hover {
                border-color: #aaa;
                background-color: #fafafa;
            }
        }
    }
`;
