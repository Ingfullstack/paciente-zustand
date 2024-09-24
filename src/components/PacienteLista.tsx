import { usePacienteStore } from "../store";
import PacientesDetalles from "./PacientesDetalles";

export default function PacienteLista() {
  const pacientes = usePacienteStore((state) => state.pacientes);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
      {pacientes.length ? (
        <div>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>

          <p className="text-lg mt-2 text-center mb-10">
            Administra tus {""}
            <span className="text-green-700 font-bold">Pacientes y Citas</span>
          </p>

          { pacientes.map(paciente => (
            <PacientesDetalles key={ paciente.id } paciente={ paciente }/>
          ))}

        </div>
      ) : (
        <div>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

          <p className="text-lg mt-2 text-center mb-10">
            Comienza Agregando Pacientes {""}
            <span className="text-green-700 font-bold">Administralos</span>
          </p>
        </div>
      )}
    </div>
  );
}
