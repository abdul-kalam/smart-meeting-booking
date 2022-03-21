import styled from "styled-components";
import { Dropdown as drpdwn } from "antd";

export const Container = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.bgColors.light};
    border-radius: 20px;
    padding: 40px;
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
