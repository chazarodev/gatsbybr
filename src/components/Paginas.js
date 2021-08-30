import React from 'react';
import styled from '@emotion/styled';
import Img from "gatsby-image";
import Layout from './Layout';
import { graphql } from 'gatsby';
import ListaPropiedades from './ListaPropiedades';

const DivContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const query = graphql`
    query($id:String!) {
        allStrapiPaginas(filter: {id: {eq: $id}}){	
            nodes{	
                nombre
                contenido
                imagen {
                    localFile {
                        sharp: childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`

const Paginas = ({data: {allStrapiPaginas: {nodes}}}) => {

    const {nombre, contenido, imagen} = nodes[0]

    return (  
        <Layout>
            <main className="contenedor">
                <h1>{nombre}</h1>
                <DivContenidoPagina>
                    <Img  
                        fluid={imagen?.localFile?.sharp.fluid}
                        fadeIn="soft"
                    />
                    <p>{contenido}</p>
                </DivContenidoPagina>
                {nombre === "Propiedades" && (
                    <ListaPropiedades />
                )}
            </main>
        </Layout>
    );
}
 
export default Paginas;