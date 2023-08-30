import ClipboardImg from '../assets/Clipboard.png'
import styles from './Clipboard.module.css'

export function Clipboard() {
    return (
       <>
            <div className={styles.list}>
                <img src={ClipboardImg} alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </>
    )
}