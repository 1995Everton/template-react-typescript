import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, Title } from './styles';

interface Props {
    app?: string;
}

interface State {
    count: number;
}

export default class About extends React.Component<Props, State> {
    render(): ReactNode {
        return (
            <Container>
                <Header>
                    <Title>About</Title>
                    <Link to="/">Go Home</Link>
                </Header>
            </Container>
        );
    }
}
