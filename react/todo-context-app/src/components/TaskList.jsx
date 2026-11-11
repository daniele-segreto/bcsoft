import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const { tasks, loading } = useTask();

    if (loading) {
        return (
            <div className="text-center my-4">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Caricamento in corso...</span>
                </div>
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="alert alert-info text-center" role="alert">
                Nessun task presente. Aggiunga un nuovo elemento utilizzando il modulo
                sopra!
            </div>
        );
    }

    return (
        <div>
            <h4 className="mb-3 text-secondary">Elenco Attività ({tasks.length})</h4>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}
