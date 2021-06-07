import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Image from '../../components/Image';
import { Container, Text } from './styles';

interface Props {
    app?: string;
}

interface State {
    count: number;
}

export default class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { count: 1 };
    }

    headleCount = (): void => {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    };

    render(): ReactNode {
        const { count } = this.state;
        return (
            <Container>
                <Header>
                    <Text>Template Totvs - ECARD-BAT</Text>
                    <Image image={logo} />
                    <Link to="/about">Go About</Link>
                    <Text>Contador de Clicks</Text>
                    <Button
                        title={count.toString()}
                        onClick={this.headleCount}
                    />
                </Header>
            </Container>
        );
    }
}
