// Importar las dependencias necesarias
import { useEffect, useState } from 'react';
import axios from 'axios';

// Definir el componente principal de la aplicación
function App() {
  // Definir estados para almacenar los datos de los microservicios
  const [microservicio1Data, setMicroservicio1Data] = useState('');
  const [microservicio2Data, setMicroservicio2Data] = useState('');

  // Efecto de efecto secundario para cargar datos al montar el componente
  useEffect(() => {
    // Consumir Microservicio 1
    axios.get('http://localhost:3001')
      .then(response => setMicroservicio1Data(response.data))
      .catch(error => console.error(error));

    // Consumir Microservicio 2
    axios.get('http://localhost:3002')
      .then(response => setMicroservicio2Data(response.data))
      .catch(error => console.error(error));
  }, []);

  const findSubjects = (student) => {
    let subjects = []

    for (const subjectId of student.subjects) {
      for (const subject of microservicio2Data) {
        if (subject.id == subjectId) {
          subjects.push(<li>{subject.name}</li>)
        }
      }
    }

    return subjects
  }

  let persons = []

  for (const student of microservicio1Data) {
    persons.push(
      <tr>
        <td>{student.firstname} {student.lastname}</td>
        <td>{student.id}</td>
        <td><ul>{findSubjects(student)}</ul></td>
      </tr>
    )
  }

  // Renderizar la interfaz de usuario
  return (
    <table>
      <caption>Estudiantes</caption>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cedula</th>
          <th>Materias</th>
        </tr>
      </thead>

      <tbody>{persons}</tbody>
    </table>
  );
}

// Exportar el componente principal
export default App;
