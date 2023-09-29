import React from 'react'
import styles from '@src/stories/Light/Light.module.css'
import LightCircle from '@src/stories/Light/light-circle/LightCircle.tsx'

const Light = () => {
  return (
    <section className={[styles['traffic-wrapper'], 'center' ].join(' ') }>
      <LightCircle color='red'></LightCircle>
      <LightCircle color='orange'></LightCircle>
      <LightCircle color='green'></LightCircle>
    </section>
  )
}

export default Light