import { Box, Divider, Paper } from "@mui/material";
// import { useForm } from "react-hook-form";
import { SearchIcon } from "~/assets/icons";
import { CustomInput, Typography } from "~/elements";
import ProductList from "./product-list";
import styles from './product.module.scss';

const defaultValues = {
    keySearch: ''
}

const Product = () => {
    // const { control, getValues, setValue, reset } = useForm<any>(formOptions)

    return (
        <Paper className={styles.product_container} elevation={3} sx={{ borderRadius: "24px" }}>
            <Box component='div' className={styles.stack_search}>
                <CustomInput
                    className={styles.search_input}
                    // sx={{ width: '440px' }}
                    inputSize='sm'
                    inputAppearance='solid'
                    name='keySearch'
                    maxRows={6}
                    placeholder='Search'
                    startAdornment={<SearchIcon />}
                />
            </Box>
            <Box component="div" className={styles.product_title}>
                <Typography variant={'h6'}>Product List</Typography>
                <Divider textAlign="left" className={styles.product_title_divider} />
            </Box>
            {/* List of categories */}
            <ProductList />
        </Paper>
    )
}

export default Product