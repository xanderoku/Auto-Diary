import React from 'react';
import { Table } from 'reactstrap';

export default class TableTest extends React.Component {
  render() {
    return (
      <Table borderless style={{color: 'white'}}>
        <thead>
          <tr>
            <th>JULY</th>
            <th>Type</th>
            <th>Mileage</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Change oil</td>
            <td>15000</td>
            <td>15/07/2019</td>
            <td>100$</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Change air filter</td>
            <td>15000</td>
            <td>15/07/2019</td>
            <td>30$</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Add antifreeze</td>
            <td>15000</td>
            <td>15/07/2019</td>
            <td>35$</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}