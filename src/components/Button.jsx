import styled from "styled-components";

export const Button = styled.button`
    /* width: 190px;
    height: 42px; */
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: linear-gradient(to right, #d326fd, #a232f1) padding-box, linear-gradient(to right, #37dcb3, #ffffff) border-box;;
    border: 2px solid transparent;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    font-weight: 500;
`;
