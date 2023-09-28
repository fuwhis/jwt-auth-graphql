import { Box, Collapse, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { CollapseDownIcon, CollapseIcon } from '~/assets/imgs';
import Image from '~/elements/image';
import { getAllProductCategories, getProductsOfCategory } from '~/services/product.service';
// import CustomizeList from './components/product-by-category';
import styles from './product.module.scss';

const ProductList = () => {
    const [open, setOpen] = useState<boolean[]>([]);
    const [openCategory, setOpenCategory] = useState<string>("")
    /** Get list of categories */
    const { isLoading, data: categories } = useQuery(['categories'], getAllProductCategories);

    /** Get products list of selected categories */
    const { data: payload, refetch } = useQuery(['allProducts', openCategory], (context) => {
        const category = context.queryKey?.[1] || ''
        if (category.length === 0) {
            return new Promise((resolve) => resolve([]))
        }
        return getProductsOfCategory(context.queryKey[1])
    }, {
        onSuccess: () => {
            console.log('GET SUCCESS LIST PRODUCT');
        },
        retry: false,
    });

    const useToggle = (currentCate: string, nextCate: string) => {
        const queryClient = useQueryClient();

        const getNameCategory = (name: string) => name;

        return useQuery(
            getNameCategory(currentCate),
            () => getProductsOfCategory(currentCate),
            {
                onSuccess: () => {
                    queryClient.prefetchQuery(getNameCategory(nextCate), () => getProductsOfCategory(nextCate));
                },
                onError: (error: any) => {
                    console.log('test--', error)
                }
            }
        )
    }

    const handleCategoryClick = (index: number, cate: string) => {
        // Set toggle
        let tempOpen = [...open];
        // tempOpen = tempOpen.map(() => false);
        tempOpen[index] = !tempOpen[index];
        setOpen(tempOpen);
        setOpenCategory(cate); // set name of category after click

        // Fetch api with cate parameter
        if (tempOpen[index] === true) {
            refetch();
        }
    }

    return (
        <div className={styles.list_container}>
            {!isLoading && categories.map((cate: string, index: number) => (
                <List key={cate} component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2, gap: '8px' }} className={styles.product_category} onClick={() => handleCategoryClick(index, cate)}>
                        <ListItemIcon sx={{ minWidth: 0 }}>
                            <Box component='img' src={open[index] ? CollapseDownIcon : CollapseIcon} />
                        </ListItemIcon>
                        <ListItemText primary={cate} />
                    </ListItemButton>

                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {payload?.products?.map((item: any) => {
                                return (
                                    <ListItem key={item?.id} className={styles.product_item}>
                                        <ListItemAvatar>
                                            <Image alt='thumbnail' src={item?.thumbnail} assignedWidth={72} assignedHeight={72} radius={8} />
                                        </ListItemAvatar>
                                        <ListItemText primary={item?.title} secondary={`$${item?.price}`} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Collapse>
                </List>
            ))}
        </div>
    );
};

export default ProductList