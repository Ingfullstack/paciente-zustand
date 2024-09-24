import PacienteFormulario from "./components/PacienteFormulario"
import PacienteLista from "./components/PacienteLista"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-center text-3xl md:text-5xl mx-1">
          Seguimiento de Pacientes {''}
          <span className="text-green-700">Veterinaria</span>  
        </h1> 

        <div className="md:flex mt-10">
          <PacienteFormulario/>
          <PacienteLista/>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
