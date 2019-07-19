import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background-color: black;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

// const Container = styled(animated.div)`
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(6, minmax(100px, 1fr));
//   grid-gap: 25px;
//   padding: 25px;
//   background: black;
//   border-radius: 5px;
//   cursor: pointer;
//   box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
//   will-change: width, height;
// `

const Container = styled(animated.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  padding: 25px;
  background: black;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`

const Item = styled(animated.div)`
  margin: 5px;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 120px;
  background: black;
  border-radius: 5px;
  will-change: transform, opacity;
`
export { Global, Container, Item }
