import React from 'react';
import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import * as heroCSS from '../styles/hero.module.css';
import Encuentra from '../components/Encuentra';
import ListaPropiedades from '../components/ListaPropiedades';

const ImageBackGround = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio()

    const {nombre, contenido, imagen} = inicio[0]

    return (
        <Layout>
            <ImageBackGround
                tag="section"
                fluid={imagen.localFile.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagenbg}>
                    <h1 className={heroCSS.titulo}>Venta de casas y departamentos exclusivos </h1>
                </div>
            </ImageBackGround>
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p css={css`text-align:center;`}>{contenido}</p>
                </div>
            </main>
            <Encuentra />
            <ListaPropiedades />
        </Layout>  
    );
}
 
export default Index;