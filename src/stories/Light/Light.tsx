import React from 'react'
import styles from '@src/stories/Light/Light.module.css'
import LightCircle from '@src/stories/Light/light-circle/LightCircle.tsx'

interface LightProps {
  activeColor: 'red' | 'orange' | 'green'
} 

const Light =  ({
  activeColor = 'orange',
}: LightProps) => {
  return (
    <section className={[styles['traffic-wrapper'], 'center' ].join(' ') }>
      <LightCircle className={`${activeColor === 'red' ? styles['shine'] : ''}`} color='red'></LightCircle>
      <LightCircle className={`${activeColor === 'orange' ? styles['shine'] : ''}`} color='orange'></LightCircle>
      <LightCircle className={`${activeColor === 'green' ? styles['shine'] : ''}`} color='green'></LightCircle>
    </section>
  )
}

export default Light