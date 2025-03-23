'use client'

import axios from 'axios'
import React, { useEffect } from 'react'

const Orders = () => {

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => console.log(res.data))
  }, [])

  return (
    <h1>Pedidos</h1>
  )
}

export default Orders