import React from 'react';
import { Link } from 'gatsby';
import Navegacion from './Navegacion';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

const Logo = styled(Link)`

    text-decoration: none;
    font-size: 5rem;
    
    p {
        font-family: 'Lato', sans-serif;
        color: #cdcdcd;
        font-weight: lighter;
        margin: 0;
    }
    
    span {
        font-weight: bold;
        color: #ffffff;
    }
`;

const Header = () => {
    return (  
        <header
            css={css`
                background-color: #0d283d;
                padding: 1rem;
            `}
        >
            <div 
                css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between
                    }
                `}
            >
                <Logo to="/">
                    <p>BIENES<span>RAICES</span></p>
                </Logo>

                <Navegacion />
            </div>
        </header>
    );
}
 
export default Header;