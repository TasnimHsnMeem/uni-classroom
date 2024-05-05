import {FC} from "react";
import {Box, Grid, Typography} from "@mui/material";
import styles from "../Settings.module.scss";

type ProfileInfoBoxProps = {title: string, value: string, contentClass?: string}

const ProfileInfoBox: FC<ProfileInfoBoxProps> = (props) => {
    const { title, value, contentClass } = props;
    return(
        <Box className={`${styles.listContent} ${contentClass}`}>
            <Grid className="align-items-center" container spacing={1}>
                <Grid item xs={12} md={3}>
                    <Typography className={`font-weight-medium ${styles.textPrimary}`}>{title}</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography className={styles.textPrimary}>{value}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProfileInfoBox;