
import styles from "./NewTask.module.css"
import plus from '../assets/plus.png'
import { Task } from "../Task/Task"
import { ChangeEvent, useState } from "react"


interface taskInterface {
    tasks: string;
    newTask: string;
}

export function NewTask() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    const [taskCount, setTaskCount] = useState(0)

    function handleCreateNewTask() {

        setTasks([...tasks, newTask])

        setNewTask("")
        handleTaskCount();
    }
    function handleChangeNewTaskValue(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }
    function deleteTask(taskToDelete: string) {
        const taskWithOutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete
        })
        setTasks(taskWithOutDeletedOne)
        handleTaskCountDelete();
    }
    function handleTaskCount() {
        setTaskCount(tasks.length + 1)

    }
    function handleTaskCountDelete() {
        setTaskCount(tasks.length - 1)
    }

    return (
        <>
            <div className={styles.search}>
                <input required type="text" placeholder='Adicione uma tarefa ' value={newTask} onChange={handleChangeNewTaskValue} />
                <button disabled={newTask.length === 0} onClick={handleCreateNewTask}>Criar <img src={plus} alt="" /></button>
            </div>
            <div className={styles.listContainer}>
                <header className={styles.listHeaderContainer}>
                    <div className={styles.tasks}><span>Tarefas Criadas </span ><div>{taskCount}</div></div>
                    <div className={styles.completed}><span>Concluídas </span><div>{taskCount} de {taskCount}</div></div>
                </header>

                <div className={styles.list}>

                    {tasks.map((task) => {
                        return (
                            <Task
                                content={task}
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}