'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
    <Button handleClick={() => alert('Liked')}>
        Curtir
    </Button>
)

export default LikeButton