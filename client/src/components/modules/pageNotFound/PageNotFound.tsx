import {FC} from "react";
import {Box} from "@mui/material";
import {WarningAmber} from "@mui/icons-material";

const styles = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    width: "100%",
    textAlign: "center"
}

const PageNotFound: FC = () => {
    return(
        <Box sx={styles}>
            <div>
                <WarningAmber/>
                <h1>404 Error</h1>
                <p>Sorry, Page not found</p>
            </div>
        </Box>
    )
}

export default PageNotFound;