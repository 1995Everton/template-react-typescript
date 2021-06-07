import React, { ReactNode } from 'react';
import { Img } from './styles';

export interface Props {
    image: string;
}

export default class Image extends React.Component<Props> {
    render(): ReactNode {
        const { image } = this.props;
        return <Img src={image} />;
    }
}
