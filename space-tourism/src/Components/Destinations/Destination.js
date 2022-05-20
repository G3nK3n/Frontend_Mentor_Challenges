import React from "react";
import { useLocation } from "react-router-dom";

const Destination = () => {
    const location = useLocation();
    return(
        <div>
            <h1>{location.pathname}</h1>
        </div>
    )
}

export default Destination;