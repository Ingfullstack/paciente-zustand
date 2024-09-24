import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { Pacientes } from "../types";
import { usePacienteStore } from "../store";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function PacienteFormulario() {

  const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm<Pacientes>();
  const pacientes = usePacienteStore((state) => state.pacientes);
  const agregarPaciente = usePacienteStore((state) => state.agregarPaciente);
  const actualizarPaciente = usePacienteStore((state) => state.actualizarPaciente);
  const activeId = usePacienteStore((state) => state.activeId);

  const registrarPaciente = (data: Pacientes) => {
    if (activeId) {
      
      actualizarPaciente(data);
      toast.success('Paciente Actualizado Correctamente',{
        autoClose: 3000
      });

    }else{
      agregarPaciente(data);
      toast.success('Paciente Registrado Correctamente',{
        autoClose: 3000
      });
    }
    reset();
  }

  useEffect(() => {
    const existe = pacientes.find(item => item.id === activeId);
    if (existe) {
      setValue("paciente", existe.paciente)
      setValue("propietario", existe.propietario)
      setValue("email", existe.email)
      setValue("fecha", existe.fecha)
      setValue("sintoma", existe.sintoma);
    }
  },[activeId])

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-2 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-green-700 font-bold">Administralos</span>
      </p>

      <form onSubmit={ handleSubmit( registrarPaciente )}
        className="bg-white shadow-lg rounded-lg p-5 mb-10"
        noValidate
      >
        <div className="mb-5">
          <label htmlFor="paciente" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="paciente"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            { ...register('paciente', { required: 'El campo nombre es requerido'})}
          />
          <ErrorMessage>{ errors.paciente?.message}</ErrorMessage>
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="propietario"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            { ...register('propietario', { required: 'El campo propietario es requerido'})}
          />
          <ErrorMessage>{ errors.propietario?.message?.toString()}</ErrorMessage>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            { ...register('email', { required: 'El campo email es requerido'})}
          />
          <ErrorMessage>{ errors.email?.message?.toString()}</ErrorMessage>
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="fecha"
            className="w-full p-3  border border-gray-100"
            type="date"
            { ...register('fecha', { required: 'El campo fecha es requerido'})}
          />
          <ErrorMessage>{ errors.fecha?.message}</ErrorMessage>
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="sintoma"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            { ...register('sintoma', { required: 'El campo sintoma es requerido'})}
          ></textarea>
          <ErrorMessage>{ errors.sintoma?.message?.toString()}</ErrorMessage>
        </div>

        <input
          type="submit"
          className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}
