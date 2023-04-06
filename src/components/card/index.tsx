import styles from './styles.module.css'

const Card = ({ items }: any) => {
    console.log(items);
    return (
        <div className={styles.card}>
            <p>{items.name}</p>
            <p>{items.description}</p>
            <div className={styles.stack}>
                {
                    items.stack && items.stack.map((item: any) => {
                        return (
                            <p>
                                {item }
                            </p>
                        )
                    })
                }

            </div>
        </div>
    );

}

export default Card;