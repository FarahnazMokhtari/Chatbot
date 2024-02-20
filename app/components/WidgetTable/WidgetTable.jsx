import React from "react";
import { useState } from 'react';
import './WidgetTable.css'


export default function WidgetTable() {


    const [columnAlertArray, setColumnAlertArray] = useState([
        'Alerts', 'Project', 'Alert Severity', 'Legislation', 'Controls'
    ]);

    const Button = ({ type }) => {
        return <button className={"WidgetTbButton " + type}>
           {type}
            </button>;

    };


    const tableData = [
        { id: 1, Alerts: 'Changes in regulations require an update to the AI model´s policies. Take action to align with the latest regulatory requirements\n', Project: <a href="#">prognosis_invest</a>, AlertSeverity: 'High', Legislation: 'EU AI Act', Controls: <a href="#" > see more</a> },
        { id: 2, Alerts: 'Changes in regulations require an update to the AI model´s policies. Take action to align with the latest regulatory requirements.', Project: <a href="#">loan_invest</a>, AlertSeverity: 'High', Legislation: 'DORA', Controls: <a href="#" > see more</a> },
        { id: 3, Alerts: 'Changes in regulations require an update to the AI model´s policies. Take action to align with the latest regulatory requirements.', Project: <a href="#">aifin_wise</a>, AlertSeverity: 'Medium', Legislation: 'EU AI Act', Controls: <a href="#" > see more</a> },
        // Add more rows as needed
    ];


    return (
        <div className="widgetTable">
            <h3 className="widgetTBLtitel">Alerts and Recommendations</h3>
            <table className="widgetTBL">
                {/*========================the column of table======================================*/}
                <tr className="widgetTr">
                    {columnAlertArray.map((item) => (

                        <th className="widgetTh">{item}</th>


                    ))}
                </tr>
                {/*========================the row of table==========================================*/}
                {tableData.map((tableData) => (
                    <tr key={tableData.id} className="WidgetLgTr">
                        <td className="WidgetLgUser">
                            <span className="WidgetLgName">{tableData.Alerts}</span>
                        </td>
                        <td className="WidgetLgDate">{tableData.Project}</td>

                        <td className="WidgetLgAmount">
                            
                            <Button type={tableData.AlertSeverity}></Button>
                        
                        </td>

                        <td > {tableData.Legislation}</td>
                        <td >{tableData.Controls} </td>
                    </tr>
                ))}

            </table>




        




        </div>
    )
}