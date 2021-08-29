import React from 'react';
import styled from '@emotion/styled';
import Img from "gatsby-image";
import Iconos from './Iconos';
import Layout from './Layout';
import { graphql } from 'gatsby';

export const query = graphql`
    query($id: String!){
        allStrapiPropiedades(filter: {id: {eq:$id}}) {
        nodes{
            nombre
            estacionamiento
            wc
            habitaciones
            descripcion
            precio
            agentes{
                nombre
                telefono
                email
            }
            imagen{
                localFile {
                    sharp: childImageSharp{
                        fluid (maxWidth: 1200){
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`

const Propiedades = ({data: {allStrapiPropiedades: {nodes}}}) => {

    const {nombre, descripcion, wc, estacionamiento, habitaciones, agentes, imagen, precio} = nodes[0]

    return (  
        <Layout>
            <h1>{nombre}</h1>
            <div>
                <main>
                    <Img  
                        fluid={imagen.localFile.sharp.fluid}
                    />
                    <p>{descripcion}</p>
                </main>
                <aside>
                    <p>${precio}</p>
                    <Iconos 
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                    />
                    <div>
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>{agentes.telefono}</p>
                        <p>{agentes.email}</p>
                    </div>
                </aside>
            </div>
        </Layout>
    );
}
 
export default Propiedades;