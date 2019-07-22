import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Global, Container, Item } from './styles'
import data from './data'
import { getModels } from '../../actions/actions';
import './add-service.css';
import ModelDropdown from './ModelDropdown';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';

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
      
      {props.brand ?
        <div><div id="display-brand"><h3>{props.brand}</h3></div>
          <Form style={{ marginTop: '20px' }}>
        <ModelDropdown models={props.models} id="dropdown" />
            <FormGroup>
              {/* <Input type="hidden" name="brand" value={ props.brand } />
              <Input type="hidden" name="model" value={ props.model } />
                {console.log(props.model)} */}
              <Label for="mileage-input">Odometer</Label>
              <Input type="text" name="mileage" id="mileage-input" placeholder="miles/kilometers" />
              <Label for="vin-input">VIN number</Label>
              <Input type="text" name="vin" id="vin-input" placeholder="VIN number" style={{ marginTop: '20px' }} />
              <Label for="photo-input">Upload image of your car</Label>
              <Input type="file" name="imgCar" id="photo-input" placeholder="photo" style={{ marginTop: '20px' }} />
              <Button block style={{ marginTop: '20px', backgroundColor: '#e50914', borderColor: '#e50914' }}>OK</Button>
            </FormGroup>
          </Form> 
        {console.log('need props', props.brand)}</div> 
        : <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
          {!open ? <h5 id="button-choose">Tap me</h5> : ''}
          {transitions ? transitions.map(({ item, index, props }) => {

            return <Item onClick={gm} index={item.index} brand={item.brand} models={item.models} key={item.ind} style={{ ...props, background: item.css }}> <img src={`images/${item.img}`} alt="CAR" /></Item>
          }) : ''}
        </Container>}
    </>
  )
}

const mapStateToProps = state => {
  return { ...state.reducer };
};

export default connect(mapStateToProps, { getModels } )(AddCarBrand) 