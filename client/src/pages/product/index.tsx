import { Box, Divider, Paper } from "@mui/material";
// import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { SearchIcon } from "~/assets/icons";
import ButtonCancelIcon from "~/assets/icons/button-cancel";
import { Button, CustomInput, Typography } from "~/elements";
import { searchProducts } from "~/services/product.service";
import ProductList from "./product-list";
import styles from './product.module.scss';

const defaultValues = {
    keySearch: ''
}
const formOptions = {
    defaultValues
}

const Product = () => {
    const [isCancelBtn, setIsCancelBtn] = useState<boolean>(false);
    // const { control, getValues, setValue, reset } = useForm<any>(formOptions)
    const [searchInput, setSearchInput] = useState<string>("")
    const inputTest = useRef("")

    const searchItems = (e: any) => {
        if (e.target.value === '') {
            setIsCancelBtn(false)
        } else {
            setIsCancelBtn(true)
        }
        setSearchInput(e.target.value)
    }
    console.log(inputTest)

    return (
        <Paper className={styles.product_container} elevation={3} sx={{ borderRadius: "24px" }}>
            <Box component='div' className={styles.stack_search}>
                <CustomInput
                    ref={inputTest}
                    className={styles.search_input}
                    inputSize='sm'
                    inputAppearance='solid'
                    name='keySearch'
                    maxRows={6}
                    placeholder='Search'
                    startAdornment={<SearchIcon />}
                    endAdornment={searchInput ? <ButtonCancelIcon /> : <></>}
                    onChange={(e) => searchItems(e)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            // fetch api
                            console.log('do validate')
                            searchProducts(searchInput)
                        }
                    }}

                />
                {
                    isCancelBtn &&
                    <Button buttonSize="sm" buttonType="on-table" onClick={() => {
                        setSearchInput("")
                        setIsCancelBtn(false)
                        inputTest.current = ""
                    }}>Cancel</Button>
                }
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