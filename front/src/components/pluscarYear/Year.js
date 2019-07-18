import React, { Component } from 'react'

export default class Year extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '2015'};
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Год машины: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">2015</option>
                <option value="">2016</option>
                <option value="">2017</option>
                <option value="">2018</option>
              </select>
            </label>
          </form>
        );
      }
    }