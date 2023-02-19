import Loader from 'components/Loader/Loader';
import React from 'react';
import {Container} from './pageContainerStyles';

interface Props {
    header: JSX.Element;
    children: JSX.Element;
}

export default function PageContainer({header, children}: Props) {
    return (
        <Container data-testid="pageContainer">
            {header}
            <div className="children">{children}</div>
            <Loader />
        </Container>
    );
}
