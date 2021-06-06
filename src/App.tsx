import React, { ReactNode } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import Header from './components/Header';
import './App.css';

interface Props {
    app?: string;
}

interface State {
    count: number;
}

export default class App extends React.Component<Props, State> {
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
            <div className="App">
                <Header>
                    <p>Template Totvs - ECARD-BAT</p>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Contador de Clicks</p>
                    <Button
                        title={count.toString()}
                        onClick={this.headleCount}
                    />
                </Header>
            </div>
        );
    }
}
