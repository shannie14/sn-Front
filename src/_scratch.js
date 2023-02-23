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

return (
  <div>
    <div>
      {brands && brands.map((brand) => (
        <p key={brand._id}>{brand.client}{brand.campaign}</p>
      ))}
    </div>

  </div>
)
}

const ExampleDataGrid = () => {
  const [sortModel, setSortModel] = useState < GridSortModel > ([
    {
      field: 'lastName',
      sort: 'asc',
    },
  ]);

  const handleSortModelChange = (model) => {
    setSortModel(model);
  }
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageComponent = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch the image data from MongoDB using axios
    axios.get('/api/images').then(response => {
      setImageData(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      {imageData.map(image => (
        <a key={image._id} href={image.url} target="_blank" rel="noopener noreferrer">
          <img src={image.url} alt={`Image ${image._id}`} />
        </a>
      ))}
    </div>
  );
}
