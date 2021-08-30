import React from 'react';
import styled from '@emotion/styled';
import Img from "gatsby-image";
import Iconos from './Iconos';
import Layout from './Layout';
import { graphql } from 'gatsby';

const DivContenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #75ab00;
    }
    .agente {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75ab00;
        padding: 3rem;
        color: #FFF; 
    }
    p {
        margin: 0;
    }
`;

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
            <DivContenido>
                <main>
                    <Img  
                        fluid={imagen.localFile?.sharp.fluid}
                        fadeIn="soft"
                    />
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">${precio}</p>
                    <Iconos 
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                    />
                    <div className="agente">
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>{agentes.telefono}</p>
                        <p>{agentes.email}</p>
                    </div>
                </Sidebar>
            </DivContenido>
        </Layout>
    );
}
 
export default Propiedades;