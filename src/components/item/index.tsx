import { FC } from "react";
import { IItem } from "./interface";
import styles from './styles.module.css';


const Item : FC<IItem> = ({name, img}) => {
    return(
        <div className={styles.container}>
            <p>{name}</p>
            <img src={img}/>
        </div>
    )
}


export default Item;