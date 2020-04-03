import React from "react";
import "./Datagrid.css";
import DatagridAPI from "./DatagridAPI";

const Datagrid = ({
    nbElements,
    setNbElements
}) => (
    <>
        <div className="datagrid">
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email Address</td>
                        <td>Gender</td>
                        <td>IP Address</td>
                    </tr>
                </thead>
            <DatagridAPI/>
            </table>
        </div>
    </>
)


export default Datagrid;