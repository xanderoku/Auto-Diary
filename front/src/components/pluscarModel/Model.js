import React, { Component } from 'react'

export default class Year extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Model1'};
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Model: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Model1</option>
                <option value="">Model2</option>
              </select>
            </label>
          </form>
        );
      }
    }