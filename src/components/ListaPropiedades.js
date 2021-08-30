import React, {useState, useEffect} from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './PropiedadPreview';
import * as ListadoCSS from '../styles/listado.module.css';
import useFiltro from '../hooks/useFiltro';

const ListaPropiedades = () => {

    const resultado = usePropiedades()
    const [propiedades] = useState(resultado)
    const [filtradas, guardarFiltradas] = useState([])

    //Filtrado de propiedades
    const {categoria, FiltroUI} = useFiltro()

    useEffect(() => {
        
        if (categoria) {
            const filtro = propiedades.filter(propiedad => (propiedad.categoria.nombre === categoria))
            guardarFiltradas(filtro)
        } else {
            guardarFiltradas(propiedades)
        }
    }, [categoria ,propiedades])

    return (
        <>  
        <h2 css={css`margin-top: 5rem;`}>Nuestras propiedades</h2>
        {FiltroUI()}
        <ul className={ListadoCSS.lpropiedades}>
            {filtradas.map(propiedad => (
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