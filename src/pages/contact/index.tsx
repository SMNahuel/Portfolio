import styles from './style.module.css'

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <a href="https://github.com/SMNahuel">
                    GITHUB
                </a>
            </div>
            <div className={styles.card}>
                <a href="https://www.linkedin.com/in/nahuel-sanchez/">
                    LINKEDIN
                </a>
            </div>
            <div className={styles.card}>
                <a href="https://calendly.com/nahuel-sanchez/meeting-with-me">
                    CALENDLY
                </a>
            </div>
            <div className={styles.card}>
                <a href="mailto:nahuelsan96@gmail.com">
                    SEND A EMAIL
                </a>
            </div>
        </div>
    )
}

export default Contact;