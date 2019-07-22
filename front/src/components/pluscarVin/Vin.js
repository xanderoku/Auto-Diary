import React, { Component } from 'react'

export default class Vin extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Vin1'};
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Vin Number: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Vin 1</option>
                <option value="">Vin 2</option>
              </select>
            </label>
          </form>
        );
      }
    }
