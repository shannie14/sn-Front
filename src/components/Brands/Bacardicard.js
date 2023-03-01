import React from "react";
import { useEffect, useState } from "react"

function Bacardicard() {
    const [data, setData] = useState([])
    const [sum, setSum] = useState([])
    const [sale, setSale] = useState([])
    const [unit, setUnit] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns/bacardi`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
        console.log("hi shannon" + data)
    }, []);

    useEffect(() => {
        const sumOfImpressions = data.reduce((total, brand) => {

            const propertyValue = parseFloat(brand.imp_total);
            return isNaN(propertyValue) ? total : total + propertyValue;
        }, 0);

        const formattedSum = sumOfImpressions.toLocaleString();
        console.log(formattedSum)

        setSum(formattedSum);

    }, [data]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/sales/bacardi`)
            .then(response => response.json())
            .then(sale => setSale(sale))
            .catch(error => console.error(error));
        console.log("hi shannon" + sale)
    }, []);

    useEffect(() => {
        const sumOfUnits = sale.reduce((total, brand) => {

            const propertyValue = parseFloat(brand.unitsT);
            return isNaN(propertyValue) ? total : total + propertyValue;
        }, 0);

        const formattedUnit = sumOfUnits.toLocaleString();
        console.log(formattedUnit)

        setUnit(formattedUnit);

    }, [data]);




    return (
        <section className="two-column">
            <div className="white-box">
                <div className="rowCard">
                    <div className="columnCard">UNITS:</div>
                    <div className="columnCard2">{unit}</div>
                </div>
                <div className="rowCard">
                    <div className="columnCard">TOTAL SALES:</div>
                    <div className="columnCard2">Text 4</div>
                </div>
            </div>
            <div className="white-box2">
                <div className="rowCard">
                    <div className="columnCard">IMPRESSIONS:</div>
                    <div className="columnCard2">{sum}</div>
                </div>
                <div className="rowCard">
                    <div className="columnCard">VIEWS:</div>
                    <div className="columnCard2"></div>
                </div>
            </div>
        </section >


    );
}

export default Bacardicard;
