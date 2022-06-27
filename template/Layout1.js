import React from 'react';
import Script from "next/script";
import LeftMenu from "../components/leftmenu";
import Index from "../components/mynav";

const Layout1 = ({children}) => {
    return (
        <>
            <div className="d-flex" id="wrapper">

               <LeftMenu></LeftMenu>

                <div id="page-content-wrapper">

                    <Index></Index>

                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
            <Script src="/static/js/scripts.js"></Script>
        </>
    );
};

export default Layout1;