import { Box, Collapse, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { CollapseDownIcon, CollapseIcon } from '~/assets/imgs';
import Image from '~/elements/image';
import styles from './product.module.scss';

const ProductList = () => {
    const [open, setOpen] = useState<boolean[]>([]);
    const [productByCategory, setProductsByCategory] = useState([] as any)
    const [category, setCategory] = useState([] as any)

    const handleToggleCategory = (index: number, cate: string) => {
        // Set toggle
        const tempOpen = [...open]
        tempOpen[index] = !tempOpen[index]
        setOpen(tempOpen)

        // Fetch api with cate parameter
        if (tempOpen[index]) fetchProductByCategory(cate)
    }

    const fetchProductByCategory = async (cate: string) => {
        await fetch(`https://dummyjson.com/products/category/${cate}`)
            .then((res) =>
                res.json()
            )
            .then(res => setProductsByCategory(res?.products))
    }

    const fetchAllCategories = async () => {
        await fetch('https://dummyjson.com/products/categories')
            .then((res) =>
                res.json()
            )
            .then(res => {
                setCategory(res)
                setOpen(Array(res.length).fill(false))
            })
    }

    useEffect(() => {
        // fetchProductByCategory();
        fetchAllCategories();
    }, []);

    return (
        <List className={styles.list_container}>
            {category.map((cate: string, index: number) => (
                <List key={cate} component={"div"} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => handleToggleCategory(index, cate)}>
                        <ListItemIcon>
                            <Box component={'img'} src={open[index] ? CollapseDownIcon : CollapseIcon} />
                        </ListItemIcon>
                        <ListItemText primary={cate} />
                    </ListItemButton>
                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                        {productByCategory.map((item: any) => (
                            <List key={item?.id} component="div" disablePadding>
                                <ListItem>
                                    <ListItemAvatar className={styles.product_thumbnail}>
                                        <Image alt='thumb' src={item?.thumbnail} assignedWidth={72} assignedHeight={72} />
                                    </ListItemAvatar>
                                    <ListItemText primary={item?.title} secondary={`$${item?.price}`} />
                                </ListItem>
                            </List>
                        ))}
                        {/* <ProductByCategory products={productByCategory} /> */}
                    </Collapse>
                </List>
            ))}
        </List>
    );
};

export default ProductList