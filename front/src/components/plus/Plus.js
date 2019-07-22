import React, { Component } from 'react';
import Pluscar from '../pluscar';
import { Parallax } from 'react-spring'
import './styles.css'

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </React.Fragment>
)
export default class Plus extends Component {
    scroll = to => this.refs.parallax.scrollTo(to)
    render() {
      return (
        <div
          style={{
            gridColumn: 'span 2',
            gridRow: 'span 2',
            background: '#dfdfdf'
          }}>
          <Parallax
            className="container"
            ref="parallax"
            pages={3}
            horizontal
            scrolling={false}>
            <Pluscar
              offset={0}
              gradient="pink"
              caption="who we are"
              first="Lorem ipsum"
              second="dolor sit"
              onClick={() => this.scroll(1)}
            />
          </Parallax>
        </div>
      )
    }
  }
  