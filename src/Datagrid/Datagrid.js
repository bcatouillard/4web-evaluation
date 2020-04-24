import React from "react";
import "./Datagrid.css";
import DatagridAPI from "./DatagridAPI";
import {Table} from 'react-bootstrap';

const Datagrid = ({
    nbElements,
    setNbElements
}) => (
    <>
        <div className="datagrid">
            <Table striped bordered hover>
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
            </Table>
        </div>
    </>
)


export default Datagrid;