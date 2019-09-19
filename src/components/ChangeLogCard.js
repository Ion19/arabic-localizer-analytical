import React from 'react';
import { Table } from 'reactstrap';

export default class ChangeLogCard extends React.Component {
  render() {
    return (
      <div>
        <h3 className="chart-title">Change Log</h3>
      
      <Table responsive striped>
        <thead>
          <tr>
            
            <th>Date/Time (CST)</th>
            <th>Modified By</th>
            <th>Notes   </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>3/9/2019, 5:15pm</td>
            <td>Joe Scartz</td>
            <td>Updated SEO key words, removing “makeup”, “lip balm” and “burt’s bees”, changed creati…</td>
          </tr>
          <tr>
            
            <td>3/3/2019, 5:15pm</td>
            <td>Rami Odeh</td>
            <td>Updated SEO key words, removing “makeup”, “lip balm” and “burt’s bees”, changed creati…</td>
          </tr>
          <tr>
            
            <td>3/1/2019, 5:15pm</td>
            <td>Becca Snider</td>
            <td>Updated SEO key words, removing “makeup”, “lip balm” and “burt’s bees”, changed creati…</td>
          </tr>

          <tr>
            
            <td>2/19/2019, 5:15pm</td>
            <td>Josh Allison</td>
            <td>Minor changes to inventory, merchandising and third party inputs.</td>
          </tr>

          <tr>
            
            <td>1/9/2019, 5:15pm</td>
            <td>Christa Klausner</td>
            <td>Re-ran scrapper tool </td>
          </tr>
        </tbody>
      </Table>
      <div className="text-center">
      <a href="./viewall/" > View all changes </a>
      </div>
      </div>

     
    );
  }
}