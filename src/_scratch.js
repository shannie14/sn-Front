            // Loop through each object returned from backend
            const formattedBrands = json.map(brand => {
              // Loop through each key and check to see if its a number, if it is, convert it to have commas
              for (const [key, value] of Object.entries(brand)) {
                if (typeof value === 'number') {
                  brand[key] = value.toLocaleString();
                }
              }
              return brand;
            });

              if (response.ok) {
                  setBrands(formattedBrands)
              }
        //   

//bottles table
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