import { useTask } from "../context/TaskContext";

export default function TaskItem({ task }) {
    const { deleteTask, toggleTaskStatus, setEditingTask } = useTask();

    return (
        <div
            className={`card mb-2 shadow-sm border-start border-4 ${task.completed ? "border-success bg-light" : "border-warning"}`}
        >
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5
                        className={`card-title mb-1 ${task.completed ? "text-decoration-line-through text-muted" : ""}`}
                    >
                        {task.title}
                    </h5>
                    {task.description && (
                        <p className="card-text text-secondary small mb-0">
                            {task.description}
                        </p>
                    )}
                </div>
                <div className="d-flex gap-2">
                    {/* Toggle status completato */}
                    <button
                        onClick={() => toggleTaskStatus(task.id, task.completed)}
                        className={`btn btn-sm ${task.completed ? "btn-outline-secondary" : "btn-outline-success"}`}
                        title={
                            task.completed
                                ? "Segna come da completare"
                                : "Segna come completato"
                        }
                    >
                        <i
                            className={`bi ${task.completed ? "bi-arrow-counterclockwise" : "bi-check-lg"}`}
                        ></i>
                    </button>

                    {/* Seleziona per la modifica */}
                    <button
                        onClick={() => setEditingTask(task)}
                        className="btn btn-sm btn-outline-primary"
                        title="Modifica"
                    >
                        <i className="bi bi-pencil"></i>
                    </button>

                    {/* Eliminazione */}
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="btn btn-sm btn-outline-danger"
                        title="Elimina"
                    >
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
