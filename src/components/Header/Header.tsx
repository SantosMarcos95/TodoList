
import styles from "./Header.module.css";
import logo from "../assets/Logo.png"

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="Logotipo todo List" />                
            </header>
        </>
    )

}