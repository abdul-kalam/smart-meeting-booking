import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.bgColors.light};
    border-radius: 20px;
    padding: 40px;
`;

export const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
`;

export const ErrorCOntainer = styled.div`
    color: ${props => props.theme.colors.red};
    background-color: ${props => props.theme.bgColors.light};
`;

export const BuildingSelectorContainer = styled.div`
    margin-left:50%
`;
