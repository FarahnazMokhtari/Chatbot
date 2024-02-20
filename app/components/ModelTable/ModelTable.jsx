import React from "react";
import { useState } from 'react';
import './ModelTable.css'
import '@fortawesome/fontawesome-free/css/all.css';

export default function ModelTablee() {


    const [columnAlertArray, setColumnAlertArray] = useState([
        'Models applied', 'Project name', 'Expected value', 'Risk level', 'Owner','Assessment status',<i class="fa-regular fa-star"></i>
    ]);

    const Button = ({ type }) => {
        return <button className={"WidgetTbButton " + type}>
           {type}
            </button>;

    };

    const StarButton = () => {
        return <button className="WidgetTbButton Star">&#9733;</button>;
      };


    const tableData = [
        { id: 1, Models_applied: <a href="#">DQN</a>, Project_name: <a href="#">prognosis_invest</a>, Expected_value: 'Waiting Assessment', Risk_level: 'EU Waiting Assessment ', Owner:'Maria Lindström',Assessment_status:'Waiting Assessment' },
        { id: 2, Models_applied: <a href="#">LSTM</a>, Project_name: <a href="#">loan_invest</a>, Expected_value: 'High', Risk_level: 'DORA',Owner:'Maria Lindström',Assessment_status:'Assessment complete'},
        { id: 3, Models_applied: <a href="#">VGG</a>,  Project_name: <a href="#">aifin_wise</a>, Expected_value: 'Medium', Risk_level: 'EU AI Act' ,Owner:'Oliver Bergman',Assessment_status:'Assessment in progress'},
        { id: 4, Models_applied: <a href="#">DCGAN</a>,  Project_name: <a href="#">risk_guard</a>, Expected_value: 'Medium', Risk_level: 'EU AI Act' ,Owner:'Maria Lindström',Assessment_status:'Assessment in progress'},
        { id: 5, Models_applied: <a href="#">BERT</a>,  Project_name: <a href="#">interest_rate</a>, Expected_value: 'Medium', Risk_level: 'EU AI Act',  Owner:'Oliver Bergman',Assessment_status:'Waiting Assessment'}
        // Add more rows as needed
    ];


    return (
        <div className="widgetTable">
            <h3 className="widgetTBLtitel"></h3>
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
                            <span className="WidgetLgName">{tableData.Models_applied}</span>
                            
                        </td>
                        <td className="WidgetLgDate">{tableData.Project_name}</td>

                        <td className="WidgetLgAmount">
                            
                            <Button type={tableData. Expected_value}></Button>
                        
                        </td>

                        <td > {tableData.Risk_level}</td>
                    
                        <td>{tableData.Owner}</td>
                        <td>{tableData.Assessment_status}</td>
                        <td><StarButton /></td>

                    </tr>
                ))}

            </table>




        




        </div>
    )
}