import React from "react";
const HomePage = React.lazy(() => import("../pages/HomePage"));

export const routeConfig = [
    { path: "/", component: HomePage },
];



