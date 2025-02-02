import React, { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

import styles from "./PageWrapper.module.scss";

const { page_wrapper, main_header, main_footer } = styles;

const PageWrapper = () => (
    <div className={page_wrapper}>
        <Header className={main_header} />
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
        <Footer className={main_footer} />
    </div>
);

export default memo(PageWrapper);
