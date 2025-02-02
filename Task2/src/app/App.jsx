import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../common/components/base/PageWrapper/PageWrapper";
import "./App.scss";

const HomePage = lazy(() => import("../common/pages/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("../common/pages/AboutUsPage/AboutUsPage"));
const PricingPage = lazy(() => import("../common/pages/PricingPage/PricingPage"));
const ComingSoonPage = lazy(() => import("../common/pages/ComingSoonPage/ComingSoonPage"));

const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<PageWrapper />}>
                <Route index element={<HomePage />} />
                <Route path="aboutUs" element={<AboutUsPage />} />
                <Route path="pricing" element={<PricingPage />} />
                <Route path="*" element={<ComingSoonPage />} />
            </Route>
        </Routes>
    </Suspense>
);

export default App;