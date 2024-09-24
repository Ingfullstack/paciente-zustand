import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Pacientes } from "./types";
import { v4 as uuidv4 } from 'uuid';

type PacienteState = {
    pacientes: Pacientes[]
    activeId: Pacientes['id']
    agregarPaciente: ( data: Pacientes ) => void
    eliminarPaciente: (id: Pacientes['id']) => void
    obtenerPacienteById: (id: Pacientes['id']) => void
    actualizarPaciente: (data: Pacientes) => void
}


export const usePacienteStore = create<PacienteState>()(devtools(persist((set) => ({

    pacientes: [],
    activeId: '',
    agregarPaciente(data) {
        const pacienteId: Pacientes = { ...data, id: uuidv4() }
        set((state) => ({
            pacientes: [...state.pacientes, pacienteId ]
        }))
    },

    eliminarPaciente(id){
        set((state) => ({
            pacientes: state.pacientes.filter(item => item.id !== id)
        }))
    },

    obtenerPacienteById(id) {
        set(() => ({
            activeId: id
        }))
    },

    actualizarPaciente(data) {
        set((state) => ({
            pacientes: state.pacientes.map(item => item.id === state.activeId ? { ...data, id: state.activeId } : item ),
            activeId: ''
        }))
    },

    }),{
        name: 'paciente-storage'
    })
))