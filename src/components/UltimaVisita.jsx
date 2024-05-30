import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { TOKEN } from '../constants/constantes';
import { Nav, Navbar } from 'react-bootstrap';


const UltimaVisita = () => {

    const [pais,setPais] = useState([]);
    const [provincia,setProvincia] = useState([]);
    const [ciudad,setCiudad] = useState([]);



    useEffect(()=>{

        axios.get('https://ipinfo.io?token=063b50af82671a')
        .then(resp=>{
            const respuesta = resp.data
            setPais(respuesta.country)
            setProvincia(respuesta.region)
            setCiudad(respuesta.city)
            console.log(pais,provincia,ciudad)

        })


    },[pais])

  return (
    <Navbar className='text-end me-5' sticky="top">{pais ? <p>Ultima visita desde: {ciudad}, {provincia}, {pais}</p> : <p>Loading location...</p>} </Navbar>
  )
}

export default UltimaVisita