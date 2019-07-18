import React, { Component } from 'react'

export default class Year extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'engine 1'};
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Engine type: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">engine 1</option>
                <option value="">engine 2</option>
              </select>
            </label>
          </form>
        );
      }
    }