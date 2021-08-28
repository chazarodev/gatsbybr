import React from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';

const ListaPropiedades = () => {

    const propiedades = usePropiedades()

    return (  
        <h2 css={css`margin-top: 5rem;`}>Nuestras propiedades</h2>
    );
}
 
export default ListaPropiedades;