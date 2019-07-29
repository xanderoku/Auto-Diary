import React from 'react';
import { Table } from 'reactstrap';
import './TableTest.css';

export default class TableTest extends React.Component {
  render() {
    return (
      <>
      <h2><b>Required services</b></h2>
      <Table borderless style={{color: 'white'}}>
        <thead>
          <tr>
            <th></th>
            <th>Type/km</th>
            <th>15000</th>
            <th>30000</th>
            <th>45000</th>
            <th>60000</th>
            <th>75000</th>
            <th>90000</th>
            <th>105000</th>
            <th>120000</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Engine oil / filter</td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Cabin air filter</td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Brake fluid</td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Air filter</td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Antifreeze</td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Fuel filter</td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Sparkplugs</td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Transmission fluid</td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep">🔴</span></td>
            <td><span role="img" aria-label="sheep"></span></td>
            <td><span role="img" aria-label="sheep"></span></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Transmission belt</td>
            <td><span role="img" aria-label="sheep">✅</span></td>
            <td><span role="img" aria-label="sheep">✅</span></td>
            <td><span role="img" aria-label="sheep">✅</span></td>
            <td><span role="img" aria-label="sheep">✅</span></td>
            <td><span role="img" aria-label="sheep">✅</span></td>
            <td><span role="img" aria-label="sheep">✅</span></td>
            <td><span role="img" aria-label="sheep">✅</span></td>
            <td><span role="img" aria-label="sheep">✅</span></td>
          </tr>
        </tbody>
      </Table>
      </>
    );
  }
}