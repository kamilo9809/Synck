import Image from "next/image";
import ComplementBody1 from "./components/complementBody1";
import ComplementBody2 from "./components/complementBody2";
import ComplementBody3 from "./components/complementBody3";
export default function Body() {
  return (
    <div>
      {/* Imagen blur de reproducción */}
      <Image className="absolute playBlur" src="/images/PLAY BLUR.svg" alt="" width={453} height={500} />

      {/* Justifica y centra 2 texto y foto */}
      <div className="bg-color-gris flex flex-row items-center justify-around h-screen">

        {/* Justifica y centra texto 50% de la pantalla */}
        <div className="flex flex-col items-center justify-center">
          {/* Título */}
          <div className="w-345 h-210 flex justify-center items-center">
            <h1 className="tamaño-texto text-white font-bold">
              CREA{' '} <br />
              <span className="customtext absolute font-bold blur-sm">EXPONE</span>
              <span className="customtext">EXPONE</span> <br /> CONECTA
            </h1>
          </div>
          
          {/* Párrafo */}
          <div className="parrafo1 mt-4 text-center">
            <p className="parrafo1 text-white">Sube y comparte tu música donde los artistas y productores conectan a través de sus habilidades.</p>
          </div>
        </div>
        
        <div className="flex relative" >
          <Image className="" src="/images/INTERFAZ PERS 1.svg" alt="person image" width={734} height={573} />
        </div>
      </div>
      {/* Texto y foto fin */}

      <div className="bg-color-gris">
        <ComplementBody1 />
        <ComplementBody2 />
        <ComplementBody3 />
      </div>
    </div>
  );
}
