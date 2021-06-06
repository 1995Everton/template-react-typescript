import styled from 'styled-components';

type ContainerProps = {
    color?: '#282c34' | 'red' | 'white';
};

export default styled.header<ContainerProps>`
    --color: ${({ color }) => color || '#a972cb'};
    background-color: var(--color);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;
