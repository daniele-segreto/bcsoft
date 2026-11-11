import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <TaskProvider>
      <div className="container py-5">
        <header className="pb-3 mb-4 border-bottom text-center">
          <h1 className="fw-bold text-dark">
            <i className="bi bi-check2-square text-primary me-2"></i>
            Gestione Task (CRUD con Context & JSON Server)
          </h1>
          <p className="text-muted">
            Laboratorio Didattico React - Prof. Segreto
          </p>
        </header>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}
