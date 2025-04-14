import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";
function AllRoutes(props) {
    const elements = useRoutes(routes);

    return <div>{ elements}</div>
}
export default AllRoutes;