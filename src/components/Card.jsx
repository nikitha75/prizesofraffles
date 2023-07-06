import styled from "styled-components";


export const Card = styled.div`
    /* width: 210px;
    height: 340px; */
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    border: 1px solid #8a99ae;
    border-radius: 5px;
    padding: 10px 10px;
`;
