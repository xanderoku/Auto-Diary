import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './CarCard.css'
import TableTest from './TableTest'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'black' }}>
    <div><TableTest/></div>
  </animated.div>,
  // ({ style }) => <animated.div style={{ ...style, background: '#e50914' }}>lorem</animated.div>,
  // ({ style }) => <animated.div style={{ ...style, background: '#f7f7f7' }}>TEST TEST TEST</animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  // const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}
