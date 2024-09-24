import { toast } from "react-toastify";
import { usePacienteStore } from "../store";
import { Pacientes } from "../types";

type Props = {
  paciente: Pacientes;
};

export default function PacientesDetalles({ paciente }: Props) {

  const eliminarPaciente = usePacienteStore(state => state.eliminarPaciente);
  const obtenerPacienteById = usePacienteStore(state => state.obtenerPacienteById);
  const handleEliminar = () => {
    eliminarPaciente(paciente.id)
    toast.error('Paciente Eliminado Correctamente');
  }

  return (
    <div className="p-5 bg-white shadow-md rounded-md mb-5">
      <p className="font-bold text-gray-700 uppercase mb-2">
        ID: {""}
        <span className="font-normal normal-case">{paciente.id}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-2">
        paciente: {""}
        <span className="font-normal normal-case">{paciente.paciente}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-2">
        propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-2">
        email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase mb-2">
        fecha: {""}
        <span className="font-normal normal-case">
          {paciente.fecha.toString()}
        </span>
      </p>

      <p className="font-bold text-gray-700 uppercase">
        sintomas: {""}
        <span className="font-normal normal-case">{paciente.sintoma}</span>
      </p>

      <div className="flex justify-between md:justify-normal gap-5 mt-5">
        <input
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 cursor-pointer px-4 py-2 rounded-md font-bold uppercase"
          value="Editar"
          onClick={ () => obtenerPacienteById( paciente.id)}
        />
        <input
          type="button"
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 cursor-pointer text-white px-4 py-2 rounded-md font-bold uppercase"
          value="Eliminar"
          onClick={ handleEliminar }
        />
      </div>
    </div>
  );
}
