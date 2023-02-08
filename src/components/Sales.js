import React from "react";

import { useEffect, useState } from "react"

const Today = () => {

    const [sales, setSales] = useState([])
    console.log('what does sales look like', sales);

    //occurs after render
    useEffect(() => {
        console.log('use effect is now running...')
        const fetchSales= async () => {
            //initiate HTTP request
            const response = await fetch('/sales')
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
    }, [])

    // Somehow transform the sales array into an arrayof columns
    // Object.keys
    console.log('now rendering the page...')
    return ( 
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
      </table>)
  }

export default Today;