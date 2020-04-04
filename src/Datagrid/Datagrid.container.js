import React, { useState } from "react";
import "./Datagrid.css";
import Datagrid from "./Datagrid";
import DatagridAPI from "./DatagridAPI";


const EnhanceDatagrid = props =>{
    const [nbElements, setNbElements] = useState([5,10,15,20]);
    const [data, setData] = useState(<DatagridAPI/>);
    console.log(data);

    return (
        <Datagrid
            {...props}
            nbElements={nbElements}
            setNbElements={setNbElements}
        />
    );
}

export default EnhanceDatagrid;