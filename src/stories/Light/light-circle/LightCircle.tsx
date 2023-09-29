import React from 'react'
import styles from '@src/stories/Light/light-circle/LightCircle.module.css'

interface LightCircleProps {
  color: string;
}

const LightCircle = ({
  color
}:LightCircleProps) => {
  return (
    <figure className={[styles['circle'], styles[`${color}-color`] ].join(' ') }></figure>
  )
}

export default LightCircle