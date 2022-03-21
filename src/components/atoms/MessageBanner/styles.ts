import styled from 'styled-components';

interface IProps {
    type: string;
}

interface IPropsColors {
    [key: string]: string | undefined
}

const COLORS : IPropsColors  = {
    error: 'red',
    success: 'green',
    info: 'orange'
}

const BGCOLORS : IPropsColors  = {
    error: "rgba(255,0,0,.2)",
    success: 'rgba(0,255,0,.2)',
    info: 'rgba(255,165,0,.2)'
}

export const MessageBox = styled.div<IProps>`
    padding: 10px;
    border: 2px solid ${props => COLORS[props.type] };
    background-color: ${props => BGCOLORS[props.type] };
    margin-bottom:20px;
`;

export const Message = styled.div`
    color: #fff;
    font-size: 12px;
`;