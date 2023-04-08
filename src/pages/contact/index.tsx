import styles from './style.module.css'

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p>
                    GITHUB
                </p>
            </div>
            <div className={styles.card}>
                <p>
                    LINKEDIN
                </p>
            </div>
            <div className={styles.card}>
                <p>
                    CALENDLY
                </p>
            </div>
            <div className={styles.card}>
                <p>
                    SEND A EMAIL
                </p>
            </div>
        </div>
    )
}

export default Contact;