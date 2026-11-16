import React from "react";
// Importazione dell'oggetto dati centralizzato
import { studentData } from "./data/studentData";
// Importazione dei singoli componenti modulari
import { StudentProfile } from "./components/StudentProfile";
import { StudentInfo } from "./components/StudentInfo";
import { StudentEvaluations } from "./components/StudentEvaluations";
import { StudentAttendance } from "./components/StudentAttendance";
import { StudentColloquio } from "./components/StudentColloquio";

/**
 * Componente principale App
 * Funge da radice dell'applicazione, importa i dati centralizzati
 * e li distribuisce tramite props ai diversi sotto-componenti della dashboard.
 */
export default function App() {
  return (
    <div
      style={{ backgroundColor: "#d8f3dc", minHeight: "100vh" }}
      className="py-5"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Intestazione del profilo studente */}
            <StudentProfile
              name={studentData.name}
              surname={studentData.surname}
              initials={studentData.initials}
            />

            {/* Layout a griglia per suddividere i contenuti in colonne */}
            <div className="row g-4">
              {/* Colonna Sinistra: Anagrafica e Valutazioni argomenti */}
              <div className="col-lg-7">
                <StudentInfo
                  age={studentData.age}
                  course={studentData.course}
                  classCode={studentData.classCode}
                />
                <StudentEvaluations evaluations={studentData.evaluations} />
              </div>

              {/* Colonna Destra: Percentuale di frequenza, note e modulo colloquio */}
              <div className="col-lg-5">
                <StudentAttendance
                  percentage={studentData.attendancePercentage}
                  notes={studentData.attendanceNotes}
                />
                <StudentColloquio />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
