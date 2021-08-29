import React, {useState, useEffect} from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './PropiedadPreview';
import * as ListadoCSS from '../styles/listado.module.css';

const ListaPropiedades = () => {

    const resultado = usePropiedades()
    const [propiedades, guardarPropiedades] = useState([])

    useEffect(() => {
        guardarPropiedades(resultado)
    }, [])

    return (
        <>  
        <h2 css={css`margin-top: 5rem;`}>Nuestras propiedades</h2>
        <ul className={ListadoCSS.lpropiedades}>
            {propiedades.map(propiedad => (
                <PropiedadPreview 
                    key={propiedad.id}
                    propiedad={propiedad}
                />
            ))}
        </ul>
        </>
    );
}
 
export default ListaPropiedades;