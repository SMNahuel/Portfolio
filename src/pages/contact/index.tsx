import styles from './style.module.css'

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p onClick={() => window.open("https://github.com/SMNahuel")}>
                    GITHUB
                </p>
            </div>
            <div className={styles.card}>
                <p onClick={() => window.open("https://www.linkedin.com/in/nahuel-sanchez/")}>
                    LINKEDIN
                </p>
            </div>
            <div className={styles.card}>
                <p onClick={() => window.open("https://calendly.com/nahuel-sanchez/meeting-with-me")}>
                    CALENDLY
                </p>
            </div>
            <div className={styles.card}>
                <p onClick={() => window.open("nahuelsan96@gmail.com")}>
                    SEND A EMAIL
                </p>
            </div>
        </div>
    )
}

export default Contact;