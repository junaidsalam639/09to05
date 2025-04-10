import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { routeConfig } from "./routeConfig";

const AppRoutes = () => {
    return (
        <Suspense fallback={<>loading...</>}>
            <Routes>
                {routeConfig?.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;


