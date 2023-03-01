import React from "react";
import { useEffect, useState } from "react"

function Camparicard() {

    const [data, setData] = useState([])
    const [sum, setSum] = useState([])
    const [sale, setSale] = useState([])
    const [unit, setUnit] = useState([])
    const [gross, setGross] = useState([])
    const [view, setView] = useState([])

    //IMP & VIEW
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/campaigns/campari`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
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
        const sumOfViews = data.reduce((total, brand) => {

            const propertyView = parseFloat(brand.view_total);
            return isNaN(propertyView) ? total : total + propertyView;
        }, 0);

        const formattedView = sumOfViews.toLocaleString();
        console.log(formattedView)

        setView(formattedView);

    }, [data]);


    //Units & Sales
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/sales/campari`)
            .then(response => response.json())
            .then(sale => setSale(sale))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const sumOfUnits = sale.reduce((total, brand) => {

            const propertyValue = parseFloat(brand.unitsT);
            return isNaN(propertyValue) ? total : total + propertyValue;
        }, 0);

        const formattedUnit = sumOfUnits.toLocaleString();
        console.log(formattedUnit)

        setUnit(formattedUnit);

    }, [sale]);

    useEffect(() => {
        const sumOfSales = sale.reduce((total, brand) => {

            const totalSales = parseFloat(brand.salesT);
            return isNaN(totalSales) ? total : total + totalSales;
        }, 0);

        const formattedSale = sumOfSales.toLocaleString();
        console.log(formattedSale)

        setGross(formattedSale);

    }, [sale]);

    return (
        <section className="two-column">
            <div className="white-box">
                <div className="rowCard">
                    <div className="columnCard">UNITS:</div>
                    <div className="columnCard2">{unit}</div>
                </div>
                <div className="rowCard">
                    <div className="columnCard">TOTAL SALES:</div>
                    <div className="columnCard2">${gross}</div>
                </div>
            </div>
            <div className="white-box2">
                <div className="rowCard">
                    <div className="columnCard">IMPRESSIONS:</div>
                    <div className="columnCard2">{sum}</div>
                </div>
                <div className="rowCard">
                    <div className="columnCard">VIEWS:</div>
                    <div className="columnCard2">{view}</div>
                </div>
            </div>
        </section >


    );
}

export default Camparicard;
