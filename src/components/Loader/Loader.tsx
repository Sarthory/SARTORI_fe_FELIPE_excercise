import React from 'react';
import {useGlobalContext} from 'context/GlobalContext';
import {LoaderContainer} from './loaderStyles';

export default function Loader() {
    const {isLoading} = useGlobalContext();

    return (
        <>
            {isLoading && (
                <LoaderContainer data-testid="loader">
                    <div className="loader" />
                </LoaderContainer>
            )}
        </>
    );
}
