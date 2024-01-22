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

  let persons = ''
  let template = (person) => {
    return /*html*/`
        <section>
          <article>
            <header>
              <h2>${person.firstname} ${person.lastname}</h2>
            </header>
          </article>
        </section>
      `
  }

  let array = microservicio1Data

  for (let person of array) {
    persons += template(person)
    // console.log(person)
  }

  // Renderizar la interfaz de usuario
  return (
    <div>
      <h1>Cliente React con Vite</h1>
      <p>Microservicio 1:</p>
      {persons}
      <p>Microservicio 2: {microservicio2Data}</p>
    </div>
  );
}

// Exportar el componente principal
export default App;
