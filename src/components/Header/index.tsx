import React, { ReactNode } from 'react';
import Container from './styles';

export interface Props {
    color?: '#282c34' | 'red' | 'white';
    children: ReactNode;
}

export default class Header extends React.Component<Props> {
    render(): ReactNode {
        const { children, color = '#282c34' } = this.props;
        return <Container color={color}>{children}</Container>;
    }
}
