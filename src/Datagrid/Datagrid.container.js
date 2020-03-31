import React, { useState } from "react";
import "./Datagrid.css";
import Datagrid from "./Datagrid";
import data from "./Datagrid.pure";


const EnhanceDatagrid = props => {
    const [nbElements, setNbElements] = useState([5,10,15,20]);






    return (
        <Datagrid
            {...props}
            nbElements={nbElements}
            setNbElements={setNbElements}
        />
    );
};

export default EnhanceDatagrid;