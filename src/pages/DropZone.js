import React from "react";

const data = [
    { date: '2021-05-21', product: 'Makers Mark BBS', units: 487, sales: '$39,115' },
    { date: '2021-08-11', product: 'Goslings Papa Seal', units: 11, sales: '2,225' },
    { date: '2021-12-06', product: 'KCD Bottled in Bond Batch #10', units: 1, sales: '$283' },
    { date: '2022-08-10', product: 'Dalmore 21', units: 0, sales: '0' },
    { date: '2022-08-23', product: 'Copper Tongue Orphan Barrel', units: 1, sales: '$355' },
    { date: '2022-08-31', product: 'Dos Hombres Mezcal Tobala Joven', units: 2, sales: '$1,200' },
    { date: '2022-09-15', product: 'Macallan 25 Year', units: 0, sales: '0' },
    { date: '2022-10-11', product: 'Kentucky Owl Batch 11', units: 2, sales: '$810' },
    { date: '2022-10-25', product: 'Kings County Distillery Blended Bourbon', units: 11, sales: '$754.89' },
    { date: '2022-11-08', product: "Michter's 10 Year Single Barrel Striaght Bourbon", units: 2, sales: '$700' },
];

const DropZone = () => {
    return (
        <div className="dz">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Product</th>
                        <th>Units</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.date}</td>
                            <td>{row.product}</td>
                            <td>{row.units}</td>
                            <td>{row.sales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DropZone;
