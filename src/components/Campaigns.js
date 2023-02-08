// import React from "react";

// import { useEffect, useState } from "react"

// const Campaigns = () => {

//     const [brands, setBrands] = useState(null)

//     //occurs after render
//     useEffect(() => {
//         const fetchBrands = async () => {
//             const response = await fetch('/brands')
//             const json = await response.json()
//                         // Loop through each object returned from backend
//             const formattedBrands = json.map(brand => {
//                 // Loop through each key and check to see if its a number, if it is, convert it to have commas
//                 for (const [key, value] of Object.entries(brand)) {
//                     if (typeof value === 'number') {
//                         brand[key] = value.toLocaleString();
//                     }
//                 }
//                 return brand;
//             });

//             if (response.ok) {setBrands(formattedBrands)}
//             }}

//     return (
//       <table cellPadding="0" cellSpacing="0">
//           <thead>
//               <tr>
//                   <th>Campaign</th>
//                   <th>Launch Date</th>
//               </tr>
//           </thead>

//           <tbody>
//               {brands && brands.map((brand) =>
//                   <tr>
//                       <td>{brand.id}</td>
//                       <td>{brand.client}</td>
//                       <td>{brand.campaign}</td>
//                       <td>{brand.live}</td>
//                   </tr>
//               )}
//           </tbody>
//       </table>)
//   }

// export default Campaigns;
