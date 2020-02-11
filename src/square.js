'use strict'
import React from 'react'

const Square = ({ color }) => (
    /**
     * No React o style é tratado como um objeto
     */
     <div style={{
        backgroundColor: color,
        height: '100px',
        width: '100px'
     }} />
     /**
      * Podemos usar o alto fechamento quando a nossa div não terá nenhum conteúdo
      */
)

Square.defaultProps = {
    color: 'yellow'
}

export default Square