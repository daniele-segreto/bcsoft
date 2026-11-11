import { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

const API_URL = 'http://localhost:3001/tasks';

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingTask, setEditingTask] = useState(null); // Per gestire lo stato di modifica (Update)

    // 1. READ (Fetch iniziale dei dati)
    const fetchTasks = async () => {
        try {
            setLoading(true);
            const res = await fetch(API_URL);
            const data = await res.json();
            setTasks(data);
        } catch (error) {
            console.error('Errore durante il recupero dei task:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // 2. CREATE (Aggiunta di un nuovo task)
    const addTask = async (newTask) => {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...newTask, completed: false }),
            });
            const data = await res.json();
            setTasks((prevTasks) => [...prevTasks, data]);
        } catch (error) {
            console.error("Errore durante l'inserimento del task:", error);
        }
    };

    // 3. UPDATE (Modifica campi di un task)
    const updateTask = async (id, updatedFields) => {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFields),
            });
            const data = await res.json();
            setTasks((prevTasks) =>
                prevTasks.map((task) => (task.id === id ? data : task))
            );
            setEditingTask(null); // Reset dello stato di editing
        } catch (error) {
            console.error("Errore durante l'aggiornamento del task:", error);
        }
    };

    // Toggle dello stato completed (Scorciatoia dell'Update)
    const toggleTaskStatus = async (id, currentStatus) => {
        await updateTask(id, { completed: !currentStatus });
    };

    // 4. DELETE (Eliminazione di un task)
    const deleteTask = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error("Errore durante l'eliminazione del task:", error);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                loading,
                editingTask,
                setEditingTask,
                addTask,
                updateTask,
                toggleTaskStatus,
                deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

// Custom Hook dedicato per accedere al contesto
export function useTask() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask deve essere utilizzato all\'interno di un TaskProvider');
    }
    return context;
}