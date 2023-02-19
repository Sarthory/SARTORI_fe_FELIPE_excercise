import Loader from 'components/Loader/Loader';
import React from 'react';
import {Container} from './pageContainerStyles';

export default function PageContainer({header, children}: any) {
    return (
        <Container>
            {header}
            <div className="children">{children}</div>
            <Loader />
        </Container>
    );
}
