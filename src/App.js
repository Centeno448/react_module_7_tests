import React, {useState, useRef} from 'react';
import TareasLista from './TareasLista'
import uuidv4 from 'uuid/v4'

function App() {
  const [ tareas, setTareas ] = useState ([ ])
  const tareaNombreRef = useRef()

  function agregarTarea(e){
    const nombre = tareaNombreRef.current.value
    if (nombre === '' ) return
    setTareas(prevTareas => {
      return [...prevTareas, {id:uuidv4(), nombre:nombre, completado:false}]
    })
    tareaNombreRef.current.value = null
  }
  
  return (
    <>
    <TareasLista tareas={tareas}/>
    <input ref={tareaNombreRef} type="text" />
    <button onClick={agregarTarea}>Añadir Tarea</button>
    <button>Limpiar Tareas Completadas</button>
    <div>0 tareas por terminar</div>
    </>
  )
}

export default App;
