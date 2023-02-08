import React from 'react';
import { useEffect, useState } from "react"
// import PropTypes from 'prop-types';
// // import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';



// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }


function Goslingsbottles() {

  const [sales, setSales] = useState([])

  useEffect(() => {
    const fetchSales = async () => {

    const response = await fetch ('/sales/?brand=Goslings')
    const json = await response.json()
    const formattedSales = json.map(sale => {
      // Loop through each key and check to see if its a number, if it is, convert it to have commas
      for (const [key, value] of Object.entries(sale)) {
        if (typeof value === 'number') {
          sale[key] = value.toLocaleString();
        }
      }
      return sale;
    });

    if (response.ok) {
      setSales(formattedSales)
    }

 
  }

    fetchSales()

  }, []);
 
  return (

    <div className="sktable">
      <table cellPadding="0" cellSpacing="0">
          <thead>
              <tr>
                  <th>Product</th>
                  <th>Units Sold</th>
                  <th>Sales</th>
              </tr>
          </thead>
      
          <tbody>
            {/*i want to map over the sales array*/}
              {sales.map((sale) =>
                  <tr>
                      <td>{sale.product}</td>
                      <td>{sale.unitsT}</td>
                      <td>{sale.salesT}</td>

                  </tr>
              )}
          </tbody>
      </table>
      </div>)};


export default Goslingsbottles;