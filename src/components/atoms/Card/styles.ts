import styled from "styled-components";

interface IProps {
    selected: string;
    onClick: any;
}
export const Container = styled.div<IProps>`
    color: #000;
    font-size: 14px;
    padding: 15px 15px;
    border : 1px solid #ddd;
    background-color:${props=>props.selected=='true'? (props => props.theme.bgColors.active) : (props => props.theme.bgColors.light)}
    
`;
