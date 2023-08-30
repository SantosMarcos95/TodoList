import { Trash } from "@phosphor-icons/react"
import styles from "./Task.module.css"



interface TaskProps {
    content: string;
    onDeleteTask: (taskToDelete: string) => void;
}


export function Task({content, onDeleteTask}: TaskProps) {
   
    function handleDeleteTask() {
        onDeleteTask(content);
      }
    return (
        <>
            <div className={styles.task}>
                <input type="checkbox" />
                <p>{content}</p>
                <button onClick={handleDeleteTask} > <Trash size={24} /> </button>
            </div>
        </>
    )
}