import styled from "styled-components";
import { Dropdown as drpdwn } from "antd";

export const Container = styled.div`
    color: ${props => props.theme.colors.white};

`;

export const DropDown = styled(drpdwn)`
    max-width: 150px;
    left: 409px;
    top: 1623px;
`;


export const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
`;