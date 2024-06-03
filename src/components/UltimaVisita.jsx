import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { TOKEN } from '../constants/constantes';
import { Nav, Navbar } from 'react-bootstrap';
import "../css/ultimaVisita.css"

const UltimaVisita = () => {

    const [pais,setPais] = useState([]);
    const [provincia,setProvincia] = useState([]);
    const [ciudad,setCiudad] = useState([]);



    useEffect(()=>{

        axios.get(TOKEN)
        .then(resp=>{
            const respuesta = resp.data
            setPais(respuesta.country)
            setProvincia(respuesta.region)
            setCiudad(respuesta.city)
            console.log(pais,provincia,ciudad)

        })


    },[pais])

  return (
    <Navbar className='text-end me-4 ultimaVisita' fixed="bottom">{pais ? <p className='textoVisita'>Última visita desde: {ciudad}, {provincia}, {pais}</p> : <p>Cargando ubicación</p>} </Navbar>
  )
}

export default UltimaVisita