import ReactDOM from 'react-dom'
import React, { memo, useState } from 'react'
import { useSpring, a } from 'react-spring'
import { useMeasure, usePrevious } from './helpers'
import { Global, Frame, Title, Content, toggle } from './styles'
import * as Icons from './icons'

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
  })
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  return (
    <Frame>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title style={style}>{name}</Title>
      <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  )
})

const TimeLine = () => (
  <>
    <Global />
    <Tree name="Expenses" defaultClose>
      <Tree name="2018 (233$)">
        <Tree name="October (1) (100$)" style={{ color: "#37ceff" }}>
          <Tree name="Tires change (100$)" style={{ color: "#37ceff" }} />
        </Tree>

        <Tree name="November" style={{ color: "#37ceff" }} />

        <Tree name="December (1) (133$)" style={{ color: "#37ceff" }}>
          <Tree name="Antifreeze add (133$)" style={{ color: "#37ceff" }} />
        </Tree>
      </Tree>
      <Tree name="2019 (143$)">
        <Tree name="January (2)(43$)" style={{ color: "#37ceff" }}>
          <Tree name="Engine oil change (23$)" style={{ color: "#37ceff" }} />
          <Tree name="Headlamps cleaning (20$)" style={{ color: "#37ceff" }} />
        </Tree>
        <Tree name="February" style={{ color: "#37ceff" }} />
        <Tree name="March (1) (100$)" style={{ color: "#37ceff" }}>
          <Tree name="Chassis tuning (100$)" style={{ color: "#37ceff" }} />
        </Tree>
        <Tree name="April" style={{ color: "#37ceff" }} />
        <Tree name="May" style={{ color: "#37ceff" }} />
      </Tree>
    </Tree>
  </>
);
export default TimeLine;