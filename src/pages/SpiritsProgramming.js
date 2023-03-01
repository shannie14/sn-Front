import React from "react";
import { useEffect, useState } from "react"
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const SpiritsProgramming = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});


  //occurs after render
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('${process.env.REACT_APP_SERVER_URL/snguides', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ filters, sort })
      }); // Call an API endpoint to fetch the data
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, [filters, sort]);

  function handleFilterChange(event) {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  }

  function handleSortChange(event) {
    const { name, value } = event.target;
    setSort({ [name]: value });
  }

  return (
    <div>
      <div>
        <label>Filter by name:</label>
        <input type="text" name="name" onChange={handleFilterChange} />
      </div>
      <div>
        <label>Sort by:</label>
        <select name="field" onChange={handleSortChange}>
          <option value="">Select a field</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
        </select>
        <select name="order" onChange={handleSortChange}>
          <option value="">Select an order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Show) => (
            <tr key={Show._id}>
              <td>{Show.series}</td>
              <td>{Show.episode}</td>
              <td>{Show.license}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpiritsProgramming