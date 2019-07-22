import React, { useState, useRef } from 'react';
import { Button, Input, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Global, Container, Item } from './styles'
import data from './data'
import { getModels } from '../../../redux/actions';
import './add-service.css';
import ModelDropdown from './ModelDropdown';

function AddCarBrand(props) {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '10%', background: '#e50914' },
    to: { size: open ? '100%' : '15%', background: open ? 'black' : '#e50914' }
  })

  const transRef = useRef()
  
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  const gm = (e) => {
    props.getModels(e.target.getAttribute('models'), e.target.getAttribute('brand'));
  }
  
  return (
    <>
      <Global />
      <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
        {!open ? <h5 id="button-choose">Tap me</h5> : ''}
        {transitions ? transitions.map(({ item, index, props }) => {
          
         return  <Item onClick={ gm } brand={item.brand} models={item.models} key={item.ind} style={{ ...props, background: item.css }}> <img src={`images/${item.img}`} alt="CAR"/></Item>
        }) : ''}
      </Container>
      {props.brand ?
      <><div id="display-brand"><h3>{props.brand}</h3></div><ModelDropdown models={props.models} id="dropdown" /></> : ''}
    {props.brand ? <Form style={{marginTop:'20px'}}>
        <FormGroup>
          {/* <Label for="mileage-input">Mileage</Label> */}
          <Input type="text" name="mileage" id="mileage-input" placeholder="miles/kilometers" />
          <Input type="vin" name="vin" id="vin-input" placeholder="VIN number" style={{marginTop:'20px'}} />
          <Button block style={{marginTop:'20px', backgroundColor: '#e50914', borderColor: '#e50914'}}>OK</Button>
        </FormGroup>
    </Form> : null}
    </>
  )
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { getModels } )(AddCarBrand) 