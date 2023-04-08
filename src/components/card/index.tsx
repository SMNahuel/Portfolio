import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import styles from './styles.module.css'

const Card = ({ items }: any) => {


    const goToPage = (url: string): void => {
        window.open(url);
    }

    return (

        <div className={styles.card} >
            <p onClick={() => goToPage(items.url)}>{items.name}</p>
            <p>{items.description}</p>
            <div className={styles.stack}>
                {
                    items.stack && items.stack.map((item: any, index: number) => {
                        return (
                            <p key={index}>
                                {item}
                            </p>
                        )
                    } )
                }

            </div>
        </div>

    );

}

export default Card;