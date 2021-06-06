import React, { ReactNode } from 'react';
import { Btn } from './styles';

export interface Props {
    title: string;
    color?: '#a972cb' | 'red' | 'white';
    hover?: '#cb72aa' | 'red' | 'white';
    onClick: () => void;
}

export default class Button extends React.Component<Props> {
    render(): ReactNode {
        const {
            onClick,
            title,
            color = '#a972cb',
            hover = '#cb72aa',
        } = this.props;
        return (
            <Btn type="button" onClick={onClick} color={color} hover={hover}>
                {title}
            </Btn>
        );
    }
}
