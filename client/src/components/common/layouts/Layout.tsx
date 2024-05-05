import {Container} from "@mui/material";
import React, {FC, ReactElement} from "react";

import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import styles from "./Layout.module.scss";

type Props = {children?: ReactElement}

const Layout: FC<Props> = ({children}): JSX.Element => {
    return(
        <div className="layout-wrapper">
            <Navbar/>
            <Sidebar/>
            <div className={styles.mainContent}>
                <Container maxWidth={false}>
                    {children ? React.cloneElement(children) : ''}
                </Container>
            </div>
        </div>
    )
}

export default Layout;