import {create} from "zustand" 

const useStore = create((set)=>({

    modoOscuro: true,

    cambiarColor:() => set((state)=>({modoOscuro:!state.modoOscuro})),
    estiloClaro:{
        backgroundColor:"#d9eaf8",
        color:"#000000"
    },
    estiloOscuro:{
    backgroundColor:"#03122E",
    color:"#ffffff"
    }


}))

export default useStore;
