import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Image from "~/elements/image";

const ProductByCategory = (products: any) => {
    console.log(products);

    return (
        <>
            {products.map((item: any) => (
                <List component="div" disablePadding>
                    <ListItem>
                        <ListItemAvatar >
                            <Image alt='thumb' src={item?.images[1]} assignedWidth={72} assignedHeight={72} radius={8} />
                        </ListItemAvatar>
                        <ListItemText primary={item?.title} secondary={`$${item?.price}`} />
                    </ListItem>
                </List>
            ))}
        </>
    )
}

export default ProductByCategory