import { graphql, useStaticQuery } from "gatsby";

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
    query{
        allStrapiPropiedades {
            nodes {
                nombre 
                descripcion
                id
                wc
                precio
                estacionamiento
                habitaciones
                categoria {
                    nombre
                }
                agentes {
                    nombre
                    telefono
                    email
                    }
                imagen {
                    localFile {
                        sharp: childImageSharp {
                            fluid (maxWidth:600, maxHeight:400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
    `)

    // console.log(datos)

    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        id: propiedad.id,
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        wc: propiedad.wc,
        estacionamiento: propiedad.estacionamiento,
        habitaciones: propiedad.habitaciones,
        precio: propiedad.precio,
        categoria: propiedad.categoria,
    }))

}

export default usePropiedades