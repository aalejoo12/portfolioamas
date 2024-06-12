import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { TOKEN } from '../constants/constantes';
import { Navbar } from 'react-bootstrap';
import { Spinner } from '@chakra-ui/react'
import "../css/ultimaVisita.css"

const UltimaVisita = () => {

  const [pais, setPais] = useState([]);
  const [provincia, setProvincia] = useState([]);
  const [ciudad, setCiudad] = useState([]);



  useEffect(() => {

    axios.get(TOKEN)
      .then(resp => {
        const respuesta = resp.data
        setPais(respuesta.country)
        setProvincia(respuesta.region)
        setCiudad(respuesta.city)
        console.log(pais, provincia, ciudad)

      })


  }, [pais])

  return (
    <>
    {}


      <Navbar className='text-end me-4 ultimaVisita' fixed="bottom">{pais ?  <p className='textoVisita'>Última visita desde: {ciudad}, {provincia}, {pais}</p> : <Spinner width="30px" height="30px"/>} </Navbar>


    </>
  )
}

export default UltimaVisita