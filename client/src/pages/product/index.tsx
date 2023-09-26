import { Box, Divider, Paper } from "@mui/material";
import { SearchIcon } from "~/assets/icons";
import { Input, Typography } from "~/elements";
import ProductList from "./product-list";
import styles from './product.module.scss';

const Product = () => {
    return (
        <Paper className={styles.product_container} elevation={3} sx={{ borderRadius: "24px" }}>
            <Box className={styles.product_title}>
                <Typography variant={'h6'}>Product List</Typography>
                <Divider textAlign="left" className={styles.product_title_divider} />
            </Box>
            {/* List of categories */}
            <ProductList />
        </Paper>
    )
}

export default Product