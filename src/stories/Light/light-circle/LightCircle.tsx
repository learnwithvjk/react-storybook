import React from 'react'
import styles from '@src/stories/Light/light-circle/LightCircle.module.css'

interface LightCircleProps {
  color: string;
  className?: string
}

const LightCircle = ({
  color,
  className
}:LightCircleProps) => {
  return (
    <figure className={[styles['circle'], styles[`${color}-color`], className ? className : '' ].join(' ') } ></figure>
  )
}

export default LightCircle