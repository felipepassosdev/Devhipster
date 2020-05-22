import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { LoaderContainer } from './styles';

export default function Loader() {
    return (
        <LoaderContainer>
            <ClipLoader
            size={75}
            color='#8cc84b'
            loading={true}
            />
        </LoaderContainer>
    )
}