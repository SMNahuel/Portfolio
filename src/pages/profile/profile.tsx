import styles from './styles.module.css';
import profileImg from '../../assets/image.jpg';
const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageProfile}></div>
            <div className={styles.about}>
                <h3>Acerca de mi</h3>
                <p>Buenas, un gusto saludarlos, espero sea de su agrado mi portfolio, en esta sección les contare un poco sobre mi como persona, me encantan los deportes individuales como kickboxing 🥊, ajedrez ♟, tenis 🎾, también conocer otros lugares del mundo 🗺 junto con su cultura, cocinar 🍳 pasar tiempo con mi familia y amigos, aprender nuevas herramientas y superarme día a día.</p>
            </div>
        </div>
    )
}

export default Profile;