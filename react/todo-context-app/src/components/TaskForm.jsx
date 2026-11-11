import { useState, useEffect } from "react";
import { useTask } from "../context/TaskContext";

export default function TaskForm() {
    const { addTask, updateTask, editingTask, setEditingTask } = useTask();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Se c'è un task selezionato per l'editing, popola i campi del form
    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description || "");
        } else {
            setTitle("");
            setDescription("");
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        if (editingTask) {
            updateTask(editingTask.id, { title, description });
        } else {
            addTask({ title, description });
        }

        setTitle("");
        setDescription("");
    };

    const handleCancel = () => {
        setEditingTask(null);
        setTitle("");
        setDescription("");
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">
                    <i
                        className={`bi ${editingTask ? "bi-pencil-square" : "bi-plus-circle"} me-2`}
                    ></i>
                    {editingTask ? "Modifica Task" : "Nuovo Task"}
                </h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label font-weight-bold">Titolo</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Inserisci il titolo dell'attività..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descrizione</label>
                        <textarea
                            className="form-control"
                            rows="2"
                            placeholder="Inserisci una breve descrizione (opzionale)..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-success">
                            <i className="bi bi-check-lg me-1"></i>
                            {editingTask ? "Aggiorna Task" : "Salva Task"}
                        </button>
                        {editingTask && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleCancel}
                            >
                                Annulla
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
