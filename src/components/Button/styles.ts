import styled from 'styled-components';

type ButtonProps = {
    color?: '#a972cb' | 'red' | 'white';
    hover?: '#cb72aa' | 'red' | 'white';
};

export const Title = styled.span``;

export const Btn = styled.button.attrs<ButtonProps>(props => ({
    type: props.type,
}))<ButtonProps>`
    --color: ${({ color }) => color || '#a972cb'};
    --hover: ${({ hover }) => hover || '#cb72aa'};
    color: var(--color);
    transition: 0.25s;
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    &:hover,
    &:focus {
        border-color: var(--hover);
        color: #fff;
        box-shadow: inset 0 0 0 2em var(--hover);
    }
`;
